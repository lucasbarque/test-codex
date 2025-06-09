import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Call us at (555) 123-4567 or email info@bluedental.com.</p>
          <Button asChild>
            <a href="mailto:info@bluedental.com">Send Email</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
