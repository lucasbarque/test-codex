'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const [serverError, setServerError] = useState<string | null>(null)

  async function onSubmit(data: FormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.errors ? JSON.stringify(json.errors) : 'Error')
      }
      reset()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message)
      } else {
        setServerError('Unknown error')
      }
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitSuccessful && !serverError && (
            <p className="mb-4 text-green-700">Message sent successfully!</p>
          )}
          {serverError && (
            <p className="mb-4 text-red-700">{serverError}</p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input id="name" {...register('name')} />
              {errors.name && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="subject">
                Subject
              </label>
              <Input id="subject" {...register('subject')} />
              {errors.subject && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <Textarea id="message" rows={4} {...register('message')} />
              {errors.message && (
                <p className="text-red-700 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
