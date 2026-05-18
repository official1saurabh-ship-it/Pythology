import React from "react";

const plans = [
    {
        name: "Starter",
        price: "₹999",
        period: "/month",
        desc: "Best for small pathologies",
        features: [
            "Patient Management",
            "Attendance Tracking",
            "Basic Reports",
            "Email Support",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: "₹2499",
        period: "/month",
        desc: "Most popular for growing pathologies",
        features: [
            "Everything in Starter",
            "Billing & Invoicing",
            "Exam & Result System",
            "patient Portal",
            "Priority Support",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "For large institutions",
        features: [
            "All Pro Features",
            "Multi-Branch Support",
            "Advanced Analytics",
            "Dedicated Manager",
            "Custom Integrations",
        ],
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white px-6 py-20 mt-20">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-black mb-4">
                    Simple & Transpatient Pricing
                </h1>
                <p className="text-slate-400 text-lg">
                    Choose a plan that fits your pathology’s needs. No hidden charges.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-screen-2xl mx-auto">

                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-3xl p-8 border transition-all duration-300
              ${plan.highlighted
                                ? "bg-gradient-to-br from-saas-accent to-saas-accent/80 scale-105 shadow-2xl"
                                : "bg-slate-900 border-slate-700 hover:scale-105"
                            }`}
                    >

                        {/* Badge */}
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-full">
                                MOST POPULAR
                            </div>
                        )}

                        {/* Plan Name */}
                        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                        <p className="text-sm text-slate-300 mb-6">{plan.desc}</p>

                        {/* Price */}
                        <div className="mb-6">
                            <span className="text-4xl font-black">{plan.price}</span>
                            <span className="text-slate-300">{plan.period}</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    ✅ {f}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <a href="https://pathology.biosoftech.in/register">
                            <button
                                className={`w-full py-3 rounded-xl font-bold transition-all
                ${plan.highlighted
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-saas-accent hover:opacity-90"
                                    }`}
                            >
                                Get Started
                            </button>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}


