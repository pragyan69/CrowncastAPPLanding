// app/privacy-policy/page.jsx
import SidebarLink from "./Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CrownCast",
  description: "Privacy Policy for CrownCast",
  // other metadata
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: "Welcome to Crowncast! We are committed to protecting the privacy and security of our users. This Privacy Policy outlines our practices concerning the collection, use, and sharing of your information through the use of our platform, Crowncast."
  },
  {
    id: "information-collection",
    title: "What Information We Collect and How We Use It",
    content: "Content Creators: We collect Google ID, email, and name via Google OAuth; YouTube data- channel analytics, video IDs, and views for campaign management. Watchers: Google ID, email, and name for participation in campaigns. Customers and Visitors of our Site: We collect information when you visit our platform, register an account, or participate in a campaign. This may include personal details such as your name, email address, and interactions with our site."
  },
  {
    id: "youtube-google",
    title: "YouTube and Google",
    content: "We use the YouTube API to obtain information about the content creator's channels and videos. Access is specifically through the following scopes: https://www.googleapis.com/auth/youtube.readonly: Allows read-only access to a user's YouTube account, including viewing public videos, playlists, and channel information. https://www.googleapis.com/auth/yt-analytics.readonly: Permits read-only access to a user's YouTube analytics reports. Users are subject to Google's Privacy Policy and Terms of Service when using features related to YouTube. To ensure compliance with the Google API Services User Data Policy, Crowncast adheres to the Limited Use requirements. We use the information obtained from Google solely to improve or provide our services within Crowncast and do not transfer this information to any other app unless strictly necessary for functionality. For more details, please visit Google API Services User Data Policy."
  },
  {
    id: "api-compliance",
    title: "Google API Services User Data Policy Compliance",
    content: "Crowncast complies with the Google API Services User Data Policy, including adherence to the Limited Use requirements. Our use and transfer to any other app of information received from Google APIs will strictly adhere to these restrictions. As part of our commitment to uphold these standards, Crowncast strictly limits the use and transfer of information obtained from Google services to purposes that are directly related to the functionality or user experience of our app. This ensures that any data obtained is handled in a manner that respects user privacy and is consistent with the permissions granted by the user."
  },
  {
    id: "cookies",
    title: "Cookies",
    content: "We use cookies to enhance user experience, manage sessions, and maintain preferences. Users can control the use of cookies at the individual browser level."
  },
  {
    id: "device-fingerprinting",
    title: "Device Fingerprinting",
    content: "We may use device fingerprinting technologies to help detect and prevent fraud by identifying patterns of behaviour that deviate from the norm."
  },
  {
    id: "information-use",
    title: "How We Use Collected Information",
    content: "Service Enhancement: To provide, operate, maintain, and improve our services. Campaign Management: To manage and analyse campaigns for content creators."
  },
  {
    id: "information-sharing",
    title: "Sharing Information With Third Parties",
    content: "We do not sell or rent personal information to third parties. We share information with third-party vendors only to the extent necessary to provide our services."
  },
  {
    id: "legal-disclosures",
    title: "Legal Disclosures",
    content: "We may disclose information if required by law or if necessary to protect our rights, property, or safety, or that of our users."
  },
  {
    id: "information-security",
    title: "Information Security",
    content: "We implement security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data."
  },
  {
    id: "eu-eea-residents",
    title: "EU and EEA Residents",
    content: "Your information may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction."
  },
  {
    id: "international-transfer",
    title: "International Transfer of Personal Data",
    content: "We process and store your information on servers hosted by Amazon Web Services (AWS), which are cloud-based. This means that your data may be stored in multiple locations around the world, depending on the global distribution of AWS servers. By using our service and providing us with your information, you consent to this transfer, processing, and storage of your information in such locations, which may include countries outside of your own."
  },
  {
    id: "data-processing-agreement",
    title: "Data Processing Agreement",
    content: "Customers who require a Data Processing Agreement (DPA) for compliance with the GDPR or other regulations can request one by contacting our support team."
  },
  {
    id: "data-retention",
    title: "Data Retention Periods",
    content: "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including as needed for our legitimate business interests and compliance with legal obligations."
  },
  {
    id: "privacy-controls",
    title: "Privacy Controls & Choices",
    content: "Account Information: Users can review, update, or delete their account information at any time. Communication Preferences: Users can manage their subscription to our newsletters and promotional communications by following the unsubscribe links in such emails."
  },
  {
    id: "dpo",
    title: "Crowncast's Data Protection Officer",
    content: "We have appointed a Data Protection Officer to oversee our management of your personal data in accordance with this Privacy Policy. If you have any questions or concerns about our privacy practices or your personal data, you may contact our Data Protection Officer."
  },
  {
    id: "ccpa",
    title: "California Consumer Privacy Act (CCPA)",
    content: "For residents of California, the CCPA grants state residents new rights regarding their data and means we are required to provide additional transparency about how we collect, use, and share your personal information."
  },
  {
    id: "coppa",
    title: "Compliance With Children's Online Privacy Protection Act",
    content: "We do not knowingly collect or solicit personal information from anyone under the age of 13 or knowingly allow such persons to register with our Service. If we become aware that we have collected personal information from a child under age 13 without verification of parental consent, we take steps to remove that information from our servers immediately."
  },
  {
    id: "business-transfers",
    title: "Business Transfers",
    content: "In the event that Crowncast, or substantially all of its assets, is acquired, your information may be one of the assets that is transferred."
  },
  {
    id: "policy-changes",
    title: "Changes To This Privacy Policy",
    content: "We may update this policy from time to time to reflect changes to our practices, technology, legal requirements, or other factors. If we make significant changes, we will notify you by posting the changes on our platform or by sending you a notification directly."
  },
  {
    id: "acceptance",
    title: "Your Acceptance Of These Terms",
    content: "By using Crowncast, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our Service. Continued use of the Service following the posting of changes to this policy will be deemed your acceptance of those changes."
  },
  {
    id: "contact",
    title: "Contacting Us",
    content: "If you have any questions about this Privacy Policy, please contact us at crowncast2024@gmail.com"
  }
];

export default function PrivacyPolicyPage() {
  return (
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
              <h1 className="mb-10 text-3xl font-bold">Crowncast Privacy Policy</h1>
              <p className="mb-5 text-base font-medium">Effective Date: 15/03/2024</p>

              {sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}