import React from 'react';
import PageHeader from '../components/PageHeader';

const Privacy = () => {
    return (
        <div>
            <PageHeader
                badge="Governance"
                title="Data Privacy & Protection Policy"
                description="Our commitment to safeguarding the data of our enterprise partners and their end-users."
                color="emerald"
            />
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose dark:prose-invert">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">1. Transmission Protection</h2>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                            NexusForge employs military-grade encryption for all data in transit and at rest. We utilize AES-256 encryption protocols as the baseline for all SaaS platforms engineered within our collective.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">2. Data Sovereignty</h2>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                            Our architecture patterns prioritize data sovereignty, allowing our enterprise partners to specify geographic hosting requirements to comply with local regulations (GDPR, CCPA, etc.).
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">3. Zero-Knowledge Principles</h2>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                            Where possible, we implement zero-knowledge architectures, ensuring that sensitive user credentials and proprietary data are never accessible to NexusForge personnel.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">4. Third-Party Audits</h2>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                            We undergo regular penetration testing and security audits by independent third-party firms to ensure our infrastructure patterns remain resilient against emerging threats.
                        </p>
                    </div>
                </div>

                <div className="mt-20 p-10 bg-gray-50 dark:bg-navy rounded-[2.5rem] border border-gray-100 dark:border-gray-800 italic text-sm text-gray-500 font-medium">
                    Last updated: February 20, 2026. For specific compliance inquiries, please transmit your request to compliance@nexusforge.ai.
                </div>
            </section>
        </div>
    );
};

export default Privacy;
