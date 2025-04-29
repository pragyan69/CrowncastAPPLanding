import SidebarLink from "./Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Safety Standards Against Child Sexual Abuse and Exploitation - CrownCast",
    description: "CrownCast's standards to protect children and prevent sexual abuse and exploitation on our platform.",
};

const sections = [
    {
        id: "overview",
        title: "Overview",
        content: "CrownCast is committed to providing a safe and trusted environment for all users. We strictly prohibit and actively prevent any form of child sexual abuse and exploitation (CSAE) on our platform."
    },
    {
        id: "zero-tolerance",
        title: "Zero-Tolerance Policy",
        content: "CrownCast enforces a strict zero-tolerance policy regarding CSAE. Any content, behavior, or activity that depicts, promotes, or implies child exploitation is immediately removed and reported to the relevant authorities."
    },
    {
        id: "content-moderation",
        title: "Content Moderation",
        content: "Our platform employs automated tools along with manual moderation to detect and remove harmful content swiftly. Content creators are required to adhere strictly to our content guidelines that prohibit any material that could exploit or endanger minors."
    },
    {
        id: "reporting-violations",
        title: "Reporting Violations",
        content: "We provide an easy-to-use reporting mechanism for users to report any suspicious or inappropriate content anonymously. Reports are reviewed urgently, and necessary actions are taken immediately, including content removal, account suspension, and escalation to authorities."
    },
    {
        id: "cooperation-authorities",
        title: "Cooperation with Authorities",
        content: "CrownCast actively cooperates with global and national law enforcement agencies. If illegal activity related to CSAE is detected, we report it without delay and provide full assistance during investigations."
    },
    {
        id: "user-education",
        title: "User Education",
        content: "We educate our users about online safety, recognizing inappropriate behavior, and promoting respectful engagement within our community. Resources are provided to encourage proactive safeguarding."
    },
    {
        id: "enforcement-actions",
        title: "Enforcement Actions",
        content: "Violations of our safety standards lead to immediate action including permanent banning of users, removal of offensive content, and notification of law enforcement if applicable."
    },
    {
        id: "continuous-improvement",
        title: "Continuous Improvement",
        content: "CrownCast regularly updates its policies, moderation practices, and technologies to enhance detection, prevention, and response mechanisms to evolving threats against child safety."
    },
    {
        id: "contact-us",
        title: "Contact Us",
        content: "If you have any concerns, want to report an issue, or seek more information about our safety standards, please contact us at crowncast2024@gmail.com."
    },
];

export default function SafetyStandardsPage() {
    return (
        <>
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/4">
                            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                                <ul className="space-y-2">
                                    <SidebarLink />
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-3/4">
                            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                                <h1 className="mb-10 text-3xl font-bold">Safety Standards Against Child Sexual Abuse and Exploitation (CSAE)</h1>

                                {sections.map((section) => (
                                    <div key={section.id} id={section.id} className="mb-8">
                                        <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                                        <p className="text-body-color dark:text-body-color-dark text-base">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}

                                <div id="contact-us" className="mt-12 text-body-color dark:text-body-color-dark text-base">
                                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                                    <p>
                                        If you have any concerns or questions regarding our Safety Standards, please contact us at{" "}
                                        <a href="mailto:crowncast2024@gmail.com" className="text-primary hover:underline">
                                            crowncast2024@gmail.com
                                        </a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
