import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfServicePage = () => {
    return (
        <div className="bg-ivory min-h-screen">
            <Navbar />
            
            <div className="w-full max-w-[1180px] mx-auto px-6 pt-32 pb-20">

                {/* Heading */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-display font-black text-ink">
                        Terms of <span className="text-primary">Service</span>
                    </h1>
                    <p className="text-mist text-sm font-bold uppercase tracking-widest">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Section */}
                <section className="space-y-10 text-smoke leading-relaxed font-medium bg-white p-10 md:p-16 rounded-[2.5rem] border border-saas-border shadow-sm">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing or using <span className="text-primary font-bold">Biosoftech Solutions</span> services, you agree to comply with and be bound by these Terms of Service.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            2. Use of Services
                        </h2>
                        <p>
                            Our services are intended for professional use by pathology labs and diagnostic centers. You agree to use the platform only for lawful purposes and in accordance with these terms.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            3. User Accounts
                        </h2>
                        <p>
                            To access certain features, you may be required to register an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            4. Intellectual Property
                        </h2>
                        <p>
                            All content, trademarks, and data on this website are the property of Biosoftech Solutions or its licensors. Unauthorized use is strictly prohibited.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            5. Limitation of Liability
                        </h2>
                        <p>
                            Biosoftech Solutions shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            6. Termination
                        </h2>
                        <p>
                            We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            7. Governing Law
                        </h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            8. Changes to Terms
                        </h2>
                        <p>
                            We may update these terms from time to time. Your continued use of our services after any changes indicates your acceptance of the new terms.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-ink">
                            9. Contact Us
                        </h2>
                        <p>
                            For any queries regarding these Terms of Service, please contact us at:
                            <br />
                            <span className="text-primary font-bold">info@biosoftech.in</span>
                        </p>
                    </div>

                </section>
            </div>

            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
