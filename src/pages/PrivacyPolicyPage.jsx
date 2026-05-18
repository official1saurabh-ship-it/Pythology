import React from "react";

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-ivory min-h-screen">
            
            <div className="w-full max-w-[1180px] mx-auto px-6 pt-32 pb-20">

                {/* Heading */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-display font-black text-ink">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-mist text-sm font-bold uppercase tracking-widest">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Section */}
                <section className="space-y-10 text-smoke leading-relaxed font-medium bg-white p-10 md:p-16 rounded-[2.5rem] border border-saas-border shadow-sm">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to <span className="text-primary font-bold">Biosoftech Solutions</span>.
                            We value your privacy and are committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            2. Information We Collect
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact details</li>
                            <li>Email address and phone number</li>
                            <li>Lab/Business information (e.g., Pathology name)</li>
                            <li>Messages or queries submitted through forms</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            3. How We Use Your Information
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To respond to your inquiries</li>
                            <li>To provide and improve our diagnostic services</li>
                            <li>To send updates, offers, or important notifications</li>
                            <li>To ensure security and prevent fraud</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            4. Data Sharing
                        </h2>
                        <p>
                            We do not sell your personal information. We may share data with trusted partners
                            only when necessary to provide our services or comply with legal requirements.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            5. Data Security
                        </h2>
                        <p>
                            We implement appropriate security measures to protect your data from unauthorized access,
                            alteration, or disclosure.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            6. Cookies
                        </h2>
                        <p>
                            Our website may use cookies to enhance user experience and analyze website traffic.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            7. Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or delete your personal data.
                            Contact us if you wish to exercise these rights.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            8. Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, you can contact us at:
                            <br />
                            <span className="text-primary font-bold">info@biosoftech.in</span>
                        </p>
                    </div>

                </section>
            </div>

        </div>
    );
};

export default PrivacyPolicyPage;
