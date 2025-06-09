import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>About Our Clinic</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Blue Dental Clinic offers compassionate dental care using the latest
            technology. Our team is dedicated to keeping your smile bright and
            healthy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
