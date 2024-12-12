import Image from "next/image";
import HistoryPath from "../components/base/History/History";
import InfoBlock from "../components/ui/InfoBlock/InfoBlock";
import styles from "./privacy.module.scss";
import Link from "next/link";

export default function Possibilitys() {
    return (
        <>
            <HistoryPath padding={16} />
            <div className={styles.privacyWrap}>
                <div className={styles.privacyBlock}>
                    <InfoBlock title="I. Information We Collect">
                        <div>We collect information from You when You use the Service, contact or interact with us, sign up for our newsletter or other mailing list, and voluntarily provide us with Your comments and other content in connection with using the Service.</div>
                        <div>As part of Your access to and use of the Service, we may collect: Your name, contact information including email address, telephone number, address, password, and any other information You voluntarily provide on the Service.</div>
                        <div>When You contact us, we may collect: Your name, contact information including email address, telephone number, and any other information that You voluntarily provide to us.</div>
                        <div>
                            When You access and use the Service, we automatically collect information regarding You and Your device, including Your device’s Internet Protocol address, the domain name of Your Internet service provider, Your location, Your mobile device information (e.g. device model and operating system version), Your page visits, Your social sharing activity, and aggregated
                            information that cannot be used to specifically identify You. Additional information collected is described in the Analytics and Cookies sections below.
                        </div>
                        <div>We may collect information about You from third party sources. The Service provides links to our Facebook and Twitter pages. If You connect with these websites through the Service, We may receive personal information about You.</div>
                        <div>We may combine all of the information we collect from or about You and use it in the manner described in this Privacy Policy.</div>
                        <div>We collect tournament match videos from various publicly available sources, including third party websites that display tournament videos.</div>
                    </InfoBlock>

                    <InfoBlock title="II. How We Use Your Information">
                        <div>We use the information that We collect for several purposes, including:</div>
                        <ul>
                            <li>The purposes for which You provided it;</li>
                            <li>To provide information and services to You;</li>
                            <li>To process and respond to Your inquiries and comments;</li>
                            <li>To process payment transactions (Your information will be used to submit Your payment information to our payment processor);</li>
                            <li>To send You information about Your relationship with us or about new projects or other information that we think You may find interesting;</li>
                            <li>To contact You for market research purposes and to use this information to customize the Service according to Your interests;</li>
                            <li>To administer, operate, and improve the Service or to further the mission of PerformStars;</li>
                            <li>To personalize and enhance Your experience using the Service;</li>
                            <li>To send periodic emails. If You choose, the email address You provide may be used to send You occasional news, updates, related product or service information, etc. Note: If at any time You would like to unsubscribe from receiving future emails, We include detailed unsubscribe instructions at the bottom of each email;</li>
                            <li>To generate and review reports and data about our user base and Service usage patterns;</li>
                            <li>To analyze the accuracy, effectiveness, usability or popularity of the Service;</li>
                            <li>To compile aggregate data for internal and external business purposes;</li>
                            <li>To prevent fraud and abuse of the Service and to otherwise protect users and visitors and our business;</li>
                            <li>To assist law enforcement and respond to subpoenas; and</li>
                            <li>To perform other business activities as needed, or as described elsewhere in this Privacy Policy.</li>
                        </ul>
                        <div>
                            As explained elsewhere in this Privacy Policy, personal information We collect may be processed by our partners in providing services related to the Service (such as administration services, technical services relating to the maintenance, servicing, and upgrading of software, hosting services, customer service, data migration services, payment processing services and
                            analytical services, among others).
                        </div>
                    </InfoBlock>
                </div>
            </div>
        </>
    );
}
