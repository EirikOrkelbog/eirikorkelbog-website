import { CheckCircle } from "lucide-react";

export default function WhatsIncluded() {
  const features = [
    "CRO Audit (navigation, clarity, product page, checkout flow)",
    "Site Speed Optimization (image compression, theme cleanup)",
    "Actionable Fixes – Done for You",
    "Delivered in 7 Days",
    "1 Round of Revisions Included",
  ];

  return (
    <section className="container py-12 px-6 md:px-12">
      <div className="flex flex-col xl:items-center mx-auto xl:text-center">
        <h2 className="h2 mb-8 xl:mb-16">Your Store, Optimized – Without Lifting a Finger</h2>
        <ul className="space-y-4 text-start">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1" size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}