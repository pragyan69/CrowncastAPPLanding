"use client";
import Link from "next/link";
import { useState } from "react";

const SidebarLink = () => {
    const [activeSection, setActiveSection] = useState("overview");

    const sections = [
        { id: "overview", title: "Overview" },
        { id: "zero-tolerance", title: "Zero-Tolerance Policy" },
        { id: "content-moderation", title: "Content Moderation" },
        { id: "reporting-violations", title: "Reporting Violations" },
        { id: "cooperation-authorities", title: "Cooperation with Authorities" },
        { id: "user-education", title: "User Education" },
        { id: "enforcement-actions", title: "Enforcement Actions" },
        { id: "continuous-improvement", title: "Continuous Improvement" },
        { id: "contact-us", title: "Contact Us" },
    ];

    return (
        <>
            {sections.map((section) => (
                <li key={section.id} className="block">
                    <Link
                        href={`#${section.id}`}
                        className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white ${
                            activeSection === section.id
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
