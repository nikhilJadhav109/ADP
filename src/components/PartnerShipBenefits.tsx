import { Award, CheckCircle, Handshake } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Every product we source meets our stringent quality standards and comes with manufacturer warranties.",
  },
  {
    icon: Award,
    title: "Best Pricing",
    description:
      "Our partnerships enable us to offer competitive pricing on premium products without compromising quality.",
  },
  {
    icon: Handshake,
    title: "Exclusive Access",
    description:
      "Access to the newest collections and exclusive designs before they hit the general market.",
  },
];
const PartnerShipBenefits = () => {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Partnering with top brands, we deliver quality products, competitive prices, and dependable service to ensure your interior design projects exceed expectations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <benefit.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {benefit.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerShipBenefits;
