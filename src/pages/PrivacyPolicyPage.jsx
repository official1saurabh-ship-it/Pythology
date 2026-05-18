import React from "react";

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-white text-black min-h-screen px-4 sm:px-8 md:px-16 pt-32 pb-20">

            <div className="w-full max-w-screen-xl mx-auto">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black">
                    Privacy Policy
                </h1>

                <p className="text-sm text-slate-500 mb-8 text-center">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>

                {/* Section */}
                <section className="space-y-6 text-slate-800 leading-relaxed">

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to <span className="font-semibold">Biosoftech Solutions</span>.
                            We value your privacy and are committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            2. Information We Collect
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name and contact details</li>
                            <li>Email address and phone number</li>
                            <li>Business information (e.g., restaurant name)</li>
                            <li>Messages or queries submitted through forms</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            3. How We Use Your Information
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To respond to your inquiries</li>
                            <li>To provide and improve our services</li>
                            <li>To send updates, offers, or important notifications</li>
                            <li>To ensure security and prevent fraud</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            4. Data Sharing
                        </h2>
                        <p>
                            We do not sell your personal information. We may share data with trusted partners
                            only when necessary to provide our services or comply with legal requirements.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            5. Data Security
                        </h2>
                        <p>
                            We implement appropriate security measures to protect your data from unauthorized access,
                            alteration, or disclosure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            6. Cookies
                        </h2>
                        <p>
                            Our website may use cookies to enhance user experience and analyze website traffic.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            7. Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or delete your personal data.
                            Contact us if you wish to exercise these rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-black mb-2">
                            8. Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, you can contact us at:
                            <br />
                            <span className="text-saas-accent font-bold">info@biosoftech.com</span>
                        </p>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;


