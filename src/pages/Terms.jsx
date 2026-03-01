import React from 'react';
import PageHeader from '../components/PageHeader';

const Terms = () => {
    return (
        <div>
            <PageHeader
                badge="Governance"
                title="Forge Terms of Engagement"
                description="The legal framework governing our technical partnerships and elite engineering services."
                color="purple"
            />
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">1. Partnership Scope</h2>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                        By engaging with NexusForge, you are entering into a strategic technical partnership. Each project is governed by a specific Statement of Work (SOW) that outlines the architectural deliverables and performance milestones.
                    </p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">2. Intellectual Property</h2>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                        Upon final transmission and full settlement of accounts, all custom source code created specifically for your platform becomes your exclusive intellectual property. NexusForge retains rights to its proprietary base libraries and infrastructure patterns.
                    </p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">3. Service Levels (SLA)</h2>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                        Maintenance contracts specify guaranteed response times. Our standard enterprise response time for critical infrastructure failures is 2 hours, 24/7/365.
                    </p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic">4. Technical Integrity</h2>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-[1.8]">
                        NexusForge reserves the right to refuse the implementation of architectures that do not meet our internal security and scalability standards. We prioritize the long-term viability of your product over short-term hacks.
                    </p>
                </div>

                <div className="mt-20 p-10 bg-gray-50 dark:bg-navy rounded-[2.5rem] border border-gray-100 dark:border-gray-800 italic text-sm text-gray-500 font-medium">
                    Effective Date: March 01, 2026. Partnership inquiries can be directed to legal@nexusforge.ai.
                </div>
            </section>
        </div>
    );
};

export default Terms;
