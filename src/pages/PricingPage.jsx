import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "Γé╣999",
        period: "/month",
        desc: "Best for small pathology labs",
        features: [
            "Patient Management",
            "Basic Report Generation",
            "Daily Collection Summary",
            "Email Support",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: "Γé╣2499",
        period: "/month",
        desc: "Most popular for growing labs",
        features: [
            "Everything in Starter",
            "Billing & Invoicing",
            "WhatsApp Integration",
            "Patient Portal Access",
            "Priority 24/7 Support",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "For large diagnostic centers",
        features: [
            "All Pro Features",
            "Multi-Branch Support",
            "Machine Interfacing",
            "NABL Documentation",
            "Dedicated Support Manager",
        ],
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-ivory">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-[1180px] mx-auto">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-display font-black text-ink">
                            Simple & <span className="text-primary">Transparent</span> Pricing
                        </h1>
                        <p className="text-smoke text-lg font-medium">
                            Choose a plan that fits your lab's needs. No hidden charges, just excellence.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-[2rem] p-10 border transition-all duration-500 bg-white shadow-sm hover:shadow-2xl hover:shadow-primary/5
                                    ${plan.highlighted 
                                        ? "border-primary ring-4 ring-primary/5 scale-105 z-10" 
                                        : "border-saas-border hover:border-primary/20"
                                    }`}
                            >
                                {/* Badge */}
                                {plan.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 grad-fire text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-display font-black text-ink">{plan.name}</h2>
                                        <p className="text-sm text-mist font-medium mt-2">{plan.desc}</p>
                                    </div>

                                    <div className="py-6 border-y border-saas-border">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-display font-black text-ink">{plan.price}</span>
                                            <span className="text-mist font-bold">{plan.period}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-smoke text-sm font-medium">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <a href="https://pathology.biosoftech.in/register" className="block pt-4">
                                        <button
                                            className={`w-full py-4 rounded-xl font-bold transition-all
                                                ${plan.highlighted
                                                    ? "grad-fire text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95"
                                                    : "bg-ivory text-ink border border-saas-border hover:bg-primary hover:text-white hover:border-primary active:scale-95"
                                                }`}
                                        >
                                            Get Started
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-mist text-sm font-medium">
                            Need a custom plan? <a href="/contact" className="text-primary font-bold hover:underline">Contact our sales team</a>
                        </p>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}


