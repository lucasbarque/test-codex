import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1)
})

export async function POST(request: Request) {
  const data = await request.json()
  const result = contactSchema.safeParse(data)
  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten() }, { status: 400 })
  }

  await prisma.contactMessage.create({ data: result.data })

  return NextResponse.json({ success: true })
}
