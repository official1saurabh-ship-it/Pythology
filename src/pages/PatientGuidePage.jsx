import { BookOpen, User, Users, ClipboardList, Activity } from "lucide-react";

const guides = [
    {
        title: "For Patients",
        icon: Users,
        points: [
            "Track your test status and sample processing",
            "View billing details & payment history",
            "Receive lab notifications & updates",
            "Communicate with lab technicians",
        ],
    },
    {
        title: "Test Preparation",
        icon: Activity,
        points: [
            "Check test preparation history",
            "View pre-test instructions & requirements",
            "Access lab results and reports",
            "Stay updated with health notices",
        ],
    },
];

export default function PatientGuidePage() {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10 pt-28">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    Patient Guide
                </h1>
                <p className="text-gray-500 mt-2">
                    Learn how to use Pathology effectively for better communication and diagnostic management
                </p>
            </div>

            {/* GUIDE CARDS */}
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                {guides.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-[#0D9488]/10 rounded-xl">
                                    <Icon className="text-saas-accent w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h2>
                            </div>

                            <ul className="space-y-2 text-gray-600">
                                {item.points.map((point, idx) => (
                                    <li key={idx}>• {point}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}

            </div>

            {/* STEP GUIDE */}
            <div className="w-full max-w-screen-xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Getting Started
                </h2>

                <div className="space-y-4 text-gray-600">
                    <p>1. Login using your registered mobile number or email.</p>
                    <p>2. Navigate through dashboard to access features.</p>
                    <p>3. Check notifications regularly.</p>
                    <p>4. Contact lab administrator if you face issues.</p>
                </div>
            </div>

            {/* VIDEO / HELP SECTION */}


        </div>
    );
}

