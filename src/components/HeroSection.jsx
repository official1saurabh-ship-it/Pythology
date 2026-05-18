import { Users, Microscope, IndianRupee, BarChart, MessageCircle } from "lucide-react";
import Laptopbag from "../assets/Laptop-bag.png";




export default function HeroSection() {
    const features = [
        {
            name: "Patient Management",
            icon: Users,
        },
        {
            name: "Diagnostic Excellence",
            icon: Microscope,
        },
        {
            name: "Billing & Invoicing",
            icon: IndianRupee,
        },
        {
            name: "Lab Reports & Analytics",
            icon: BarChart,
        },
        {
            name: "Patient Communication",
            icon: MessageCircle,
        },
    ];
    return (
        <section className="relative w-full bg-gradient-to-r from-teal-50 to-teal-100 py-20 lg:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">

            <div className="relative w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

                {/* LEFT CONTENT */}
                <div className="relative z-10 space-y-8">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-saas-accent rounded-2xl shadow-lg shadow-saas-accent/20 flex items-center justify-center text-white font-black text-xl">
                            PA
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                Pathology
                            </h2>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                Lab Management Software
                            </p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight">
                        Smart Lab, <br />
                        <span className="text-saas-accent">Better Future</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg lg:text-2xl text-slate-600 font-bold max-w-xl leading-relaxed">
                        A complete digital solution to manage your lab operations
                        smoothly and efficiently.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-8 pt-4">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex items-center gap-3 group cursor-pointer">

                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-saas-accent group-hover:scale-110 group-hover:shadow-md transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <p className="text-sm font-bold text-slate-700 tracking-wide">{item.name}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="pt-8">
                        <button className="px-10 py-5 rounded-2xl bg-saas-accent text-white font-black text-lg shadow-2xl shadow-saas-accent/30 hover:bg-saas-accent/90 hover:scale-105 active:scale-95 transition-all">
                            <a href='https://pathology.biosoftech.in/register'>Get Started Now</a>
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center items-center opacity-100 z-auto pointer-events-auto mt-12 lg:mt-0">
                    <div className="relative w-full max-w-[800px]">
                        {/* Decorative glow behind image */}
                        <div className="absolute -inset-10 bg-saas-accent/10 blur-[100px] rounded-full" />
                        
                        <img
                            src={Laptopbag}
                            alt="Dashboard"
                            className="relative w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] animate-float"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}

