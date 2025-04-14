
// components/Docs/SidebarLink.jsx
"use client";
import Link from "next/link";
import { useState } from 'react';

const SidebarLink = () => {
    const [activeSection, setActiveSection] = useState("introduction");

    const sections = [
        { id: "introduction", title: "Introduction" },
        { id: "information-collection", title: "Information We Collect" },
        { id: "youtube-google", title: "YouTube and Google" },
        { id: "api-compliance", title: "API Compliance" },
        { id: "cookies", title: "Cookies" },
        { id: "device-fingerprinting", title: "Device Fingerprinting" },
        { id: "information-use", title: "How We Use Information" },
        { id: "information-sharing", title: "Information Sharing" },
        { id: "legal-disclosures", title: "Legal Disclosures" },
        { id: "information-security", title: "Information Security" },
        { id: "eu-eea-residents", title: "EU and EEA Residents" },
        { id: "international-transfer", title: "International Transfer" },
        { id: "data-processing-agreement", title: "Data Processing Agreement" },
        { id: "data-retention", title: "Data Retention" },
        { id: "privacy-controls", title: "Privacy Controls" },
        { id: "dpo", title: "Data Protection Officer" },
        { id: "ccpa", title: "CCPA Compliance" },
        { id: "coppa", title: "COPPA Compliance" },
        { id: "business-transfers", title: "Business Transfers" },
        { id: "policy-changes", title: "Policy Changes" },
        { id: "acceptance", title: "Your Acceptance" },
        { id: "contact", title: "Contact Us" },
    ];

    return (
        <>
            {sections.map((section) => (
                <li key={section.id} className="block">
                    <Link
                        href={`#${section.id}`}
                        className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white ${activeSection === section.id
                                ? "bg-stroke dark:bg-blackho"
                                : ""
                            }`}
                        onClick={() => setActiveSection(section.id)}
                    >
                        {section.title}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default SidebarLink;
