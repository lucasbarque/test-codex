import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  "Routine Cleanings",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Emergency Care",
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Our Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
