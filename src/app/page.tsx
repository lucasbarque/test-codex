import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-[color:var(--primary-blue)]">Blue Dental Clinic</h1>
      <p className="max-w-prose">
        Providing gentle dental care for the whole family. Let us keep your smile bright and healthy.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button asChild>
          <Link href="/about">About Us</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">Services</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </main>
  );
}
