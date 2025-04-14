
"use client";
import Link from "next/link";
import { useState } from 'react';

const SidebarLink = () => {
    const [activeSection, setActiveSection] = useState("introduction");

    const sections = [
        { id: "introduction", title: "Introduction" },
        { id: "using-crowncast", title: "Using Crowncast" },
        { id: "account-creation", title: "Account Creation" },
        { id: "content-creators", title: "Content Creators" },
        { id: "watchers", title: "Watchers" },
        { id: "brands", title: "Brands" },
        { id: "rights-and-ownership", title: "Rights and Ownership" },
        { id: "prohibited-activities", title: "Prohibited Activities" },
        { id: "modifications", title: "Modifications to the Service" },
        { id: "disputes", title: "Disputes" },
        { id: "governing-law", title: "Governing Law" },
        { id: "changes", title: "Changes" },
        { id: "contact-us", title: "Contact Us" },
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
