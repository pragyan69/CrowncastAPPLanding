
import SidebarLink from "./Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions - CrownCast",
    description: "Terms and Conditions for CrownCast",
    // other metadata
};

const sections = [
    {
        id: "introduction",
        title: 'Introduction',
        content: 'Welcome to Crowncast! These Terms and Conditions govern your use of Crowncast and provide information about the Crowncast service, outlined below. When you create a Crowncast account or use Crowncast, you agree to these terms.'
    },
    {
        id: "using-crowncast",
        title: 'Using Crowncast',
        content: 'Crowncast provides a platform for YouTube content creators to run campaigns, engage with viewers, and track campaign performance effectively. Viewers can participate in campaigns, share content, and earn rewards based on their engagement.'
    },
    {
        id: "account-creation",
        title: 'Account Creation',
        content: 'To use Crowncast, you may need to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.'
    },
    {
        id: "content-creators",
        title: 'Content Creators',
        content: 'As a content creator, you are responsible for the content you submit to Crowncast, including videos, images, and other materials. By posting content on Crowncast, you grant Crowncast a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the service provided by Crowncast.'
    },
    {
        id: "watcher",
        title: 'Watchers',
        content: 'As a watcher, you can engage with the campaigns posted by content creators. You agree to engage respectfully and responsibly with the content. Any fraudulent activity or misuse of the sharing and rewards system will lead to immediate termination of your account.'
    },
    {
        id: "brands",
        title: 'Brands',
        content: 'Brands are welcome to collaborate with content creators on Crowncast. All brand partnerships must be conducted transparently and in compliance with applicable advertising laws.'
    },
    {
        id: "rights-and-ownership",
        title: 'Rights and Ownership',
        content: 'You retain your rights to any content you submit, post, or display on or through Crowncast. By submitting, posting, or displaying content on or through Crowncast, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods (now known or later developed).'
    },
    {
        id: "prohibited-activities",
        title: 'Prohibited Activities',
        content: 'You may not access or use Crowncast for any purpose other than that for which we make the site and services available. Prohibited activities include: engaging in any automated use of the system, such as using scripts to send comments or messages, or using any data mining tools; interfering with, disrupting, or creating an undue burden on the services or the networks connected to the services; attempting to impersonate another user or person; using the username of another user; using information obtained from the site to harass, abuse, or harm another person.'
    },
    {
        id: "modifications",
        title: 'Modifications to the Service',
        content: 'Crowncast reserves the right at any time to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. You agree that Crowncast shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.'
    },
    {
        id: "disputes",
        title: 'Disputes',
        content: 'If there is a dispute between users on this site, or between users and any third party, you agree that Crowncast is under no obligation to become involved.'
    },
    {
        id: "governing-law",
        title: 'Governing Law',
        content: 'These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.'
    },
    {
        id: "changes",
        title: 'Changes',
        content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.'
    },
    {
        id: "contact-us",
        title: 'Contact Us',
        content: 'If you have any questions about these Terms, please contact us at crowncast2024@gmail.com'
    },
];
export default function DocsPage() {
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
                                <h1 className="mb-10 text-3xl font-bold">Terms and Conditions for Crowncast</h1>

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
                                        If you have any questions about these Terms, please contact us at{" "}
                                        <a href="mailto:crowncast2024@gmail.com" className="text-primary hover:underline">
                                            crowncast2024@gmail.com
                                        </a>
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
