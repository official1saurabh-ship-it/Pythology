import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const services = [
    {
        name: "Website",
        status: "operational",
    },
    {
        name: "patient Dashboard",
        status: "operational",
    },
    {
        name: "Payment System",
        status: "degraded",
    },
    {
        name: "Notifications",
        status: "down",
    },
];

const getStatusUI = (status) => {
    switch (status) {
        case "operational":
            return {
                text: "Operational",
                color: "text-green-600",
                bg: "bg-green-100",
                icon: CheckCircle,
            };
        case "degraded":
            return {
                text: "Degraded",
                color: "text-yellow-600",
                bg: "bg-yellow-100",
                icon: AlertTriangle,
            };
        case "down":
            return {
                text: "Down",
                color: "text-red-600",
                bg: "bg-red-100",
                icon: XCircle,
            };
        default:
            return {};
    }
};

export default function SystemStatusPage() {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10 pt-28">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    System Status
                </h1>
                <p className="text-gray-500 mt-2">
                    Real-time status of Pathology services
                </p>
            </div>

            {/* OVERALL STATUS */}
            <div className="w-full max-w-screen-xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-8 text-center">
                <p className="text-lg font-semibold text-green-600">
                    All Systems Operational
                </p>
            </div>

            {/* SERVICES LIST */}
            <div className="w-full max-w-screen-xl mx-auto space-y-4">
                {services.map((service, i) => {
                    const status = getStatusUI(service.status);
                    const Icon = status.icon;

                    return (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm"
                        >
                            <span className="font-medium text-gray-800">
                                {service.name}
                            </span>

                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg}`}>
                                <Icon className={`w-4 h-4 ${status.color}`} />
                                <span className={`text-sm font-medium ${status.color}`}>
                                    {status.text}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* INCIDENT HISTORY */}
            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Recent Incidents
                </h2>

                <div className="bg-white p-5 rounded-xl shadow-sm text-gray-600 text-sm">
                    No recent incidents reported 🎉
                </div>
            </div>

        </div>
    );
}


