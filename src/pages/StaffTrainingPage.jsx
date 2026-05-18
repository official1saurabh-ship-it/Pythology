import { PlayCircle, BookOpen, Activity, Users } from "lucide-react";

const trainingModules = [
    {
        title: "Getting Started",
        desc: "Learn the basics of using Pathology dashboard",
        icon: BookOpen,
    },
    {
        title: "Managing Patients",
        desc: "Add, update and manage patient data easily",
        icon: Users,
    },
    {
        title: "Sample Tracking",
        desc: "Track sample collection and processing efficiently",
        icon: BookOpen,
    },
    {
        title: "Lab Workflows",
        desc: "Conduct and manage lab procedures smoothly",
        icon: Activity,
    },
];

export default function StaffTrainingPage() {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10 pt-28">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    Staff Training
                </h1>
                <p className="text-gray-500 mt-2">
                    Learn how to use Pathology effectively in your daily lab workflow
                </p>
            </div>

            {/* TRAINING MODULES */}
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {trainingModules.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition group cursor-pointer"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D9488]/10 text-saas-accent mb-4 group-hover:bg-saas-accent group-hover:text-white transition">
                                <Icon className="w-6 h-6" />
                            </div>

                            <h3 className="font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* VIDEO SECTION */}
            <div className="w-full max-w-screen-xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Watch Training Videos
                </h2>

                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-gray-500" />
                </div>
            </div>

            {/* STEPS GUIDE */}
            <div className="max-w-5xl mx-auto mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Quick Start Guide
                </h2>

                <div className="space-y-4 text-gray-600 bg-white p-6 rounded-2xl shadow-sm">
                    <p>1. Login to your technician account.</p>
                    <p>2. Navigate to your dashboard.</p>
                    <p>3. Manage patients and samples.</p>
                    <p>4. Upload test reports and track progress.</p>
                </div>
            </div>

            {/* CTA */}

        </div>
    );
}

