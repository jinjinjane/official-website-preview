import React from "react";
import { SEO } from "../../components/SEO";
import "./style.css";

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Jovida. Learn how we collect, use, and protect your personal health data." 
      />
      <div className="privacy-policy__wrapper">
        <header className="privacy-policy__header">
          {/* <span
            aria-hidden="true"
            className="privacy-policy__icon"
            role="img"
          >
            🔐
          </span> */}

          <div>
            <h1 className="privacy-policy__title">Privacy Policy</h1>

            <p className="privacy-policy__subtitle">
              Fluxvita Corporation - jovida
            </p>

            <p className="privacy-policy__updated">
              Effective Date: Upon your acceptance and use of the Services
              <br />
              Last Updated: October 30, 2025
            </p>
          </div>
        </header>

        <section className="privacy-policy__section" id="table-of-contents">
          <h2>Table of Contents</h2>
          <ol className="privacy-policy__toc">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#information-we-collect">Information We Collect</a>
            </li>
            <li>
              <a href="#how-we-collect-information">How We Collect Information</a>
            </li>
            <li>
              <a href="#how-we-use-your-information">How We Use Your Information</a>
            </li>
            <li>
              <a href="#how-we-share-your-information">How We Share Your Information</a>
            </li>
            <li>
              <a href="#data-retention">Data Retention</a>
            </li>
            <li>
              <a href="#data-security">Data Security</a>
            </li>
            <li>
              <a href="#your-privacy-rights">Your Privacy Rights</a>
            </li>
            <li>
              <a href="#cookies-and-tracking-technologies">
                Cookies and Tracking Technologies
              </a>
            </li>
            <li>
              <a href="#third-party-services-and-links">Third-Party Services and Links</a>
            </li>
            <li>
              <a href="#childrens-privacy">Children&apos;s Privacy</a>
            </li>
            <li>
              <a href="#international-data-transfers">International Data Transfers</a>
            </li>
            <li>
              <a href="#state-specific-privacy-rights">State-Specific Privacy Rights</a>
            </li>
            <li>
              <a href="#changes-to-this-privacy-policy">Changes to This Privacy Policy</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ol>
        </section>

        <section className="privacy-policy__section" id="introduction">
          <h2>1. Introduction</h2>
          <p>
            Welcome to jovida, a health and wellness coaching service operated by Fluxvita
            Corporation (&quot;Fluxvita,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This
            Privacy Policy explains how we collect, use, disclose, and protect your personal information
            when you use our services through our mobile application (&quot;App&quot;), website at jovida.ai
            (&quot;Website&quot;), and other communication channels including WhatsApp, iMessage, SMS, email,
            and phone (collectively, the &quot;Services&quot;).
          </p>
          <p>
            <strong>Our Commitment to Your Privacy:</strong>
          </p>
          <ul>
            <li>We do NOT sell your personal health data to third parties</li>
            <li>We do NOT use your health data for advertising or marketing purposes</li>
            <li>We use your data solely to improve our AI coaching services and for de-identified research</li>
          </ul>
          <p>
            By using our Services, you agree to the collection, use, and disclosure of your information as
            described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use
            our Services.
          </p>
          <p>
            <strong>Important Note:</strong> This Privacy Policy should be read together with our Terms and
            Conditions, which govern your use of the Services.
          </p>
        </section>

        <section className="privacy-policy__section" id="information-we-collect">
            <h2>2. Information We Collect</h2>
            <p>We collect several types of information to provide and improve our Services:</p>
            <h3>2.1 Personal Information You Provide</h3>
            <p>
              <strong>Account Information:</strong>
            </p>
            <ul>
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Date of birth</li>
              <li>Gender</li>
              <li>Account credentials (username and password)</li>
            </ul>
            <p>
              <strong>Profile and Health Information:</strong>
            </p>
            <ul>
              <li>Height and weight</li>
              <li>Health goals (e.g., weight management, improved sleep, better nutrition)</li>
              <li>Dietary preferences and restrictions</li>
              <li>Allergies and food sensitivities</li>
              <li>Activity level and exercise habits</li>
              <li>Sleep patterns and quality</li>
              <li>General wellness information</li>
            </ul>
            <p>
              <strong>Payment Information:</strong>
            </p>
            <ul>
              <li>Payment card details (processed by third-party payment processors)</li>
              <li>Billing address</li>
              <li>Transaction history</li>
            </ul>
            <p>
              <strong>Communications:</strong>
            </p>
            <ul>
              <li>
                Messages and conversations with our AI coach through any channel (App, WhatsApp,
                iMessage, SMS, email, phone)
              </li>
              <li>Voice messages and recordings (when you use voice features)</li>
              <li>Customer support inquiries and correspondence</li>
              <li>Feedback and survey responses</li>
            </ul>
            <h3>2.2 Health and Wellness Data from Wearable Devices</h3>
            <p>When you connect your wearable devices or health apps, we may collect:</p>
            <p>
              <strong>
                From Apple Health, Google Fit, Fitbit, Garmin, Amazfit, Huawei Health, Xiaomi Health,
                and other platforms:
              </strong>
            </p>
            <ul>
              <li>Heart rate and heart rate variability</li>
              <li>Steps, distance, and active minutes</li>
              <li>Calories burned</li>
              <li>Sleep duration, stages, and quality</li>
              <li>Blood oxygen levels</li>
              <li>Respiratory rate</li>
              <li>Body temperature</li>
              <li>Workout and exercise data</li>
              <li>Nutrition and water intake logs</li>
              <li>Mindfulness and meditation data</li>
              <li>Menstrual cycle information (if applicable)</li>
            </ul>
            <p>
              <strong>Important:</strong> We only access the specific data you authorize when connecting
              these devices. You can manage these permissions at any time through your device settings.
            </p>
            <h3>2.3 Automatically Collected Information</h3>
            <p>
              <strong>Device and Usage Information:</strong>
            </p>
            <ul>
              <li>Device type, model, and operating system</li>
              <li>IP address and general location (city/state level)</li>
              <li>Browser type and version</li>
              <li>App version and settings</li>
              <li>Pages or screens viewed and time spent</li>
              <li>Features used and interaction patterns</li>
              <li>Date and time of access</li>
              <li>Referring/exit pages</li>
            </ul>
            <p>
              <strong>Cookies and Tracking Technologies:</strong>
            </p>
            <ul>
              <li>Cookies, web beacons, and similar technologies (see Section 9)</li>
              <li>Unique device identifiers</li>
              <li>Analytics data</li>
            </ul>
            <h3>2.4 Information from Third Parties</h3>
            <p>We may receive information from:</p>
            <ul>
              <li>Payment processors (transaction confirmation)</li>
              <li>Social media platforms (if you share content)</li>
              <li>Wearable device manufacturers and health platforms</li>
              <li>Third-party authentication services (e.g., Sign in with Apple, Google Sign-In)</li>
            </ul>
            <h3>2.5 Biometric Data and Voice Recordings</h3>
            <p>
              <strong>Voice Recordings:</strong> We may collect voice recordings when you use voice features
              to communicate with our AI coach (via App, phone, WhatsApp, or other channels).
            </p>
            <p>
              <strong>Important Notice Regarding Biometric Identifiers (Illinois BIPA and Similar Laws):</strong>
            </p>
            <p>
              <strong>
                We do NOT collect, store, or create biometric identifiers or biometric information
              </strong>{" "}
              as defined by the Illinois Biometric Information Privacy Act (BIPA) or similar state
              biometric privacy laws, including:
            </p>
            <ul>
              <li>Voiceprints (unique templates derived from voice recordings for identification purposes)</li>
              <li>Facial scans or facial geometry</li>
              <li>Fingerprints, hand scans, or retina/iris scans</li>
              <li>Other biometric templates used to identify individuals</li>
            </ul>
            <p>
              <strong>How We Use Voice Recordings:</strong>
            </p>
            <ul>
              <li>Voice recordings are converted to text for AI processing purposes only</li>
              <li>We do not create or retain voice templates, voiceprints, or other biometric identifiers</li>
              <li>Voice data is used solely to provide coaching services, not for identification or authentication</li>
            </ul>
            <p>
              <strong>If Future Biometric Features Are Introduced:</strong> Should we introduce any features
              that collect, use, or store biometric identifiers in the future, we will:
            </p>
            <ol>
              <li>Provide you with separate written notice and obtain your informed written consent before collection</li>
              <li>Publicly disclose our biometric data retention schedule and destruction guidelines</li>
              <li>Implement heightened security measures</li>
              <li>Comply with all applicable biometric privacy laws, including BIPA</li>
              <li>Never sell, lease, or trade biometric information</li>
            </ol>
            <p>
              <strong>For Illinois Residents:</strong> If you are an Illinois resident and have concerns about
              biometric data, please contact us at support@fluxvita.com.
            </p>
          </section>

        <section
            className="privacy-policy__section"
            id="how-we-collect-information"
          >
            <h2>3. How We Collect Information</h2>
            <p>We collect information through:</p>
            <ol>
              <li>
                <strong>Direct Input:</strong> When you create an account, update your profile, or communicate
                with our AI coach
              </li>
              <li>
                <strong>Automatic Collection:</strong> Through cookies, analytics tools, and app functionality
              </li>
              <li>
                <strong>Device Integrations:</strong> When you authorize connections to wearable devices and health platforms
              </li>
              <li>
                <strong>Third-Party Services:</strong> From payment processors, social media, and authentication providers
              </li>
              <li>
                <strong>Inferences:</strong> We may derive insights from the data you provide (e.g., estimating optimal sleep schedules)
              </li>
            </ol>
          </section>
        <section className="privacy-policy__section" id="how-we-use-your-information">
            <h2>4. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <h3>4.1 To Provide and Improve Our Services</h3>
            <ul>
              <li>
                <strong>Personalized AI Coaching:</strong> Generate customized health and wellness recommendations,
                meal plans, activity suggestions, and motivational support
              </li>
              <li>
                <strong>Service Delivery:</strong> Operate and maintain the App, Website, and multi-channel communication
              </li>
              <li>
                <strong>Performance Monitoring:</strong> Track your progress toward health goals
              </li>
              <li>
                <strong>AI Model Training and Improvement:</strong>{" "}
                <strong>Only when you explicitly opt in</strong> by actively checking the consent box during
                registration or in Settings, we will use your conversations and data to train, test, and improve
                our AI models and algorithms for better recommendations. This consent is entirely optional and does
                not affect core coaching functionality.
              </li>
              <li>
                <strong>Product Development:</strong> Develop new features and enhance existing functionality
              </li>
              <li>
                <strong>Quality Assurance:</strong> Monitor and improve the accuracy and effectiveness of our AI coaching
              </li>
            </ul>
            <h3>4.2 For Research and Analytics</h3>
            <ul>
              <li>
                <strong>De-identified Research:</strong> Use aggregated and de-identified data for health and wellness
                research, academic publications, and industry insights
              </li>
              <li>
                <strong>Usage Analytics:</strong> Understand how users interact with our Services to improve user experience
              </li>
              <li>
                <strong>Trend Analysis:</strong> Identify patterns in health and wellness behaviors
              </li>
            </ul>
            <p>
              <strong>Important:</strong> Research use involves data that has been de-identified (stripped of personal
              identifiers) so it cannot reasonably be linked back to you.
            </p>
            <h3>4.3 For Business Operations</h3>
            <ul>
              <li>
                <strong>Account Management:</strong> Create and maintain your account, authenticate your identity
              </li>
              <li>
                <strong>Payment Processing:</strong> Process subscription payments and manage billing
              </li>
              <li>
                <strong>Customer Support:</strong> Respond to your inquiries and provide technical assistance
              </li>
              <li>
                <strong>Communications:</strong> Send service-related notices, updates, and responses
              </li>
              <li>
                <strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal processes
              </li>
            </ul>
            <h3>4.4 For Security and Fraud Prevention</h3>
            <ul>
              <li>Detect and prevent fraud, abuse, and unauthorized access</li>
              <li>Protect the security and integrity of our Services</li>
              <li>Enforce our Terms and Conditions and other policies</li>
            </ul>
            <h3>4.5 With Your Consent</h3>
            <p>For any other purposes disclosed to you at the time of collection or with your explicit consent.</p>
          </section>
        <section className="privacy-policy__section" id="how-we-share-your-information">
            <h2>5. How We Share Your Information</h2>
            <p>We do NOT sell your personal information to third parties. We may share your information in the following circumstances:</p>
            <h3>5.1 With Service Providers</h3>
            <p>We share information with third-party service providers who perform services on our behalf:</p>
            <p>
              <strong>AI and Technology Partners:</strong>
            </p>
            <ul>
              <li>
                <strong>OpenAI, Anthropic (Claude), Google (Gemini), and open-source AI models:</strong> To power our AI coaching features
              </li>
              <li>
                <strong>Cloud hosting providers:</strong> To store data and operate our infrastructure
              </li>
              <li>
                <strong>Analytics providers:</strong> To understand usage patterns
              </li>
            </ul>
            <p>
              <strong>Payment Processors:</strong>
            </p>
            <ul>
              <li>
                <strong>Stripe, Apple Pay, Google Pay, PayPal:</strong> To process payments and subscriptions
              </li>
            </ul>
            <p>
              <strong>Apple App Store Subscriptions (iOS Users):</strong>
            </p>
            <p>
              If you subscribe via the Apple App Store, Apple processes your payment directly. We do not have access to your credit card information. 
              Per Apple&apos;s guidelines, the following terms apply to App Store subscriptions:
            </p>
            <ul>
              <li>
                <strong>Payment:</strong> Charged to your iTunes Account at confirmation of purchase
              </li>
              <li>
                <strong>Auto-Renewal:</strong> Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period
              </li>
              <li>
                <strong>Renewal Charges:</strong> Account will be charged for renewal within 24-hours prior to the end of the current period
              </li>
              <li>
                <strong>Management:</strong> You can manage subscriptions and turn off auto-renewal by going to your Account Settings after purchase
              </li>
              <li>
                <strong>Free Trial:</strong> Any unused portion of a free trial period will be forfeited when you purchase a subscription
              </li>
            </ul>
            <p>
              <strong>Communication Platforms:</strong>
            </p>
            <ul>
              <li>
                <strong>WhatsApp, iMessage, SMS providers, email services:</strong> To deliver coaching messages and notifications
              </li>
            </ul>
            <p>
              <strong>Wearable Device Platforms:</strong>
            </p>
            <ul>
              <li>
                <strong>Apple Health, Google Fit, Fitbit, Garmin, Amazfit, Huawei Health, Xiaomi Health:</strong> To sync your health data
              </li>
            </ul>
            <p>
              <strong>Special Notice for Apple HealthKit and Google Fit Data:</strong>
            </p>
            <p>We collect health data from Apple HealthKit, Google Fit, and other health platforms solely for the following purposes:</p>
            <ul>
              <li>
                <strong>Providing personalized health and wellness coaching services</strong> to you
              </li>
              <li>
                <strong>Improving the quality and accuracy</strong> of our AI recommendations
              </li>
              <li>
                <strong>De-identified research</strong> to advance health and wellness science
              </li>
            </ul>
            <p>
              <strong>We do NOT:</strong>
            </p>
            <ul>
              <li>Use HealthKit or Google Fit data for advertising or marketing purposes</li>
              <li>
                Share HealthKit or Google Fit data with third parties for their own advertising or marketing purposes
              </li>
              <li>Sell health data from these platforms to any third party</li>
            </ul>
            <p>
              <strong>Your Control:</strong>
            </p>
            <ul>
              <li>You authorize data access with minimum necessary permissions when connecting wearable devices</li>
              <li>
                You may revoke HealthKit/Google Fit permissions at any time through your device Settings (iPhone: Settings &gt; Privacy &gt; Health; Android: Google Fit app settings)
              </li>
              <li>
                Revoking access will limit some coaching features but will not affect your account
              </li>
            </ul>
            <p>
              <strong>Apple HealthKit Compliance:</strong> This use of HealthKit data complies with Apple&apos;s App Store Review Guidelines Section 5.1.3 (Health and Health Research).
            </p>
            <p>All service providers are contractually obligated to protect your information and use it only for the purposes we specify.</p>
            <h3>5.2 For Legal Reasons</h3>
            <p>
              We may disclose your information when required by law or when we believe disclosure is necessary to:
            </p>
            <ul>
              <li>Comply with legal obligations, court orders, or government requests</li>
              <li>Enforce our Terms and Conditions and other agreements</li>
              <li>Protect our rights, property, or safety, or that of our users or the public</li>
              <li>Detect, prevent, or address fraud, security, or technical issues</li>
            </ul>
            <h3>5.3 Business Transfers</h3>
            <p>
              If Fluxvita is involved in a merger, acquisition, sale of assets, bankruptcy, or other business transaction, your information may be transferred as part of that transaction. We will notify you of any such change and your choices regarding your information.
            </p>
            <h3>5.4 With Your Consent</h3>
            <p>We may share your information with third parties when you explicitly consent, such as:</p>
            <ul>
              <li>Sharing achievements on social media (Twitter/X, Facebook, Instagram, TikTok)</li>
              <li>Participating in research studies</li>
              <li>Using features that require third-party integration</li>
            </ul>
            <h3>5.5 Aggregated and De-identified Data</h3>
            <p>
              We may share aggregated, anonymized, or de-identified data that cannot reasonably identify you for research, marketing, or other purposes.
            </p>
          </section>
        <section className="privacy-policy__section" id="data-retention">
            <h2>6. Data Retention</h2>
            <h3>6.1 Active Accounts</h3>
            <p>
              We retain your personal information for as long as your account is active and as necessary to provide you with the Services.
            </p>
            <h3>6.2 After Account Deletion</h3>
            <p>When you delete your account:</p>
            <ul>
              <li>
                <strong>Personal Identifiable Information:</strong> Retained for up to <strong>12 months</strong> for legal, tax, audit, and dispute resolution purposes, then permanently deleted
              </li>
              <li>
                <strong>De-identified Data:</strong> May be retained indefinitely for research and analytics purposes, as it cannot be linked back to you
              </li>
              <li>
                <strong>Legal Holds:</strong> We may retain information longer if required by law or legal proceedings
              </li>
            </ul>
            <h3>6.3 How to Delete Your Account</h3>
            <p>You can delete your account at any time by:</p>
            <ol>
              <li>Going to Account Settings in the App or Website</li>
              <li>Selecting &quot;Delete Account&quot;</li>
              <li>Following the confirmation steps</li>
            </ol>
            <p>Or contact us at support@fluxvita.com.</p>
          </section>
        <section className="privacy-policy__section" id="data-security">
            <h2>7. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information, including:</p>
            <ul>
              <li>
                <strong>Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest
              </li>
              <li>
                <strong>Access Controls:</strong> Restricted access to personal information on a need-to-know basis
              </li>
              <li>
                <strong>Authentication:</strong> Secure login with password requirements
              </li>
              <li>
                <strong>Monitoring:</strong> Regular security audits and monitoring for unauthorized access
              </li>
              <li>
                <strong>Vendor Security:</strong> Third-party service providers must meet our security standards
              </li>
            </ul>
            <p>
              <strong>Important Limitation:</strong> No security system is impenetrable. While we strive to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>
        <section className="privacy-policy__section" id="your-privacy-rights">
            <h2>8. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <h3>8.1 General Rights</h3>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information (subject to legal exceptions)
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a structured, machine-readable format
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing of your information
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for AI training or other optional processing
              </li>
            </ul>
            <h3>8.2 AI Training Consent (Opt-In)</h3>
            <p>
              <strong>We only use your conversations and data for AI model training if you explicitly consent:</strong>
            </p>
            <p>
              <strong>During Registration or in Settings:</strong>
            </p>
            <ol>
              <li>You must <strong>actively check</strong> the box: &quot;I consent to use my data for AI model training and improvement&quot;</li>
              <li>This consent is entirely optional and does not affect core coaching functionality</li>
              <li>
                You can withdraw consent at any time by going to Settings &gt; Privacy &gt; AI Training and unchecking the box
              </li>
            </ol>
            <p>
              <strong>Important:</strong> Whether you consent or not, you will still receive full AI coaching services. Consenting only helps us improve future models for all users.
            </p>
            <h3>8.3 How to Exercise Your Rights</h3>
            <p>To exercise any of these rights:</p>
            <ul>
              <li>Email: support@fluxvita.com</li>
              <li>Subject Line: &quot;Privacy Rights Request&quot;</li>
              <li>Include: Your name, email address, and specific request</li>
            </ul>
            <p>We will respond within <strong>30 days</strong> for most requests (45 days for GDPR requests).</p>
          </section>
        <section
            className="privacy-policy__section"
            id="cookies-and-tracking-technologies"
          >
            <h2>9. Cookies and Tracking Technologies</h2>
            <h3>9.1 What We Use</h3>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the Services to function (login, security)
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand usage patterns (e.g., Google Analytics)
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>
            <h3>9.2 Your Choices</h3>
            <p>
              <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies. Visit your browser&apos;s help section for instructions.
            </p>
            <p>
              <strong>Opt-Out Links:</strong>
            </p>
            <ul>
              <li>
                Google Analytics:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a href="https://optout.networkadvertising.org/">
                  https://optout.networkadvertising.org/
                </a>
              </li>
              <li>
                Digital Advertising Alliance:{" "}
                <a href="https://optout.aboutads.info/">
                  https://optout.aboutads.info/
                </a>
              </li>
            </ul>
            <p>
              <strong>Note:</strong> Disabling cookies may limit some functionality of the Services.
            </p>
          </section>
        <section
            className="privacy-policy__section"
            id="third-party-services-and-links"
          >
            <h2>10. Third-Party Services and Links</h2>
            <p>
              Our Services may contain links to third-party websites, apps, or services (e.g., wearable device apps,
              social media platforms). This Privacy Policy does not apply to those third parties. We are not responsible
              for their privacy practices. Please review their privacy policies before providing them with information.
            </p>
            <p>
              <strong>Third-Party AI Providers:</strong> Our AI models use services from OpenAI, Anthropic, Google, and other providers.
              Each has its own privacy policy:
            </p>
            <ul>
              <li>
                OpenAI:{" "}
                <a href="https://openai.com/privacy">https://openai.com/privacy</a>
              </li>
              <li>
                Anthropic:{" "}
                <a href="https://www.anthropic.com/privacy">https://www.anthropic.com/privacy</a>
              </li>
              <li>
                Google:{" "}
                <a href="https://policies.google.com/privacy">
                  https://policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p>
              <strong>Data Retention and Training Practices:</strong>
            </p>
            <p>
              We use enterprise/API-level agreements with AI providers and configure them to minimize data retention and prohibit
              training on your data:
            </p>
            <ul>
              <li>
                <strong>OpenAI (Enterprise API):</strong> Configured for zero retention for training purposes. Data is not used to train OpenAI&apos;s models.
                Temporary retention may occur for abuse monitoring as per OpenAI&apos;s data usage policies.
              </li>
              <li>
                <strong>Anthropic Claude (API):</strong> Enterprise API tier does not use customer data for model training. Data retention is minimized per Anthropic&apos;s privacy commitments.
              </li>
              <li>
                <strong>Google Gemini (Enterprise API):</strong> Configured to disable data use for Google&apos;s model training. Minimal retention per Google Cloud&apos;s data processing terms.
              </li>
            </ul>
            <p>
              Where a provider does not support absolute zero retention, we employ <strong>contractual and technical controls</strong> to limit data use
              and retention duration, and we disclose those limitations here. Your conversations are shared with AI providers only to the extent necessary
              to generate coaching responses.
            </p>
          </section>
        <section className="privacy-policy__section" id="childrens-privacy">
            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our Services are intended for users <strong>18 years of age and older</strong>. We do not knowingly collect personal information from individuals
              under 18 years of age. If we learn we have collected information from someone under 18, we will delete it promptly. If you believe we have
              collected information from an individual under 18, please contact us at support@fluxvita.com.
            </p>
          </section>
        <section
            className="privacy-policy__section"
            id="international-data-transfers"
          >
            <h2>12. International Data Transfers</h2>
            <p>
              Fluxvita is based in the United States. If you access our Services from outside the U.S., your information will be transferred to, stored, and
              processed in the United States and other countries where our service providers operate.
            </p>
            <p>
              <strong>For European Users:</strong> We rely on Standard Contractual Clauses and other approved mechanisms for international data transfers. You have the right to request information about these safeguards by contacting us.
            </p>
          </section>
        <section
            className="privacy-policy__section"
            id="state-specific-privacy-rights"
          >
            <h2>13. State-Specific Privacy Rights</h2>
            <h3>13.1 California Residents (CCPA/CPRA)</h3>
            <p>
              <strong>Your California Privacy Rights:</strong>
            </p>
            <p>
              Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have specific rights:
            </p>
            <ol>
              <li>
                <strong>Right to Know:</strong> Request disclosure of personal information collected, used, and shared
              </li>
              <li>
                <strong>Right to Delete:</strong> Request deletion of personal information (subject to exceptions)
              </li>
              <li>
                <strong>Right to Correct:</strong> Request correction of inaccurate personal information
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> We do NOT sell or share personal information, so no opt-out is necessary
              </li>
              <li>
                <strong>Right to Limit Use of Sensitive Personal Information:</strong> We do not use sensitive personal information beyond what is necessary to provide the Services
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights
              </li>
            </ol>
            <p>
              <strong>Categories of Personal Information We Collect:</strong>
            </p>
            <ul>
              <li>Identifiers (name, email, phone)</li>
              <li>Commercial information (purchase history)</li>
              <li>Internet activity (usage data)</li>
              <li>Geolocation data (general location)</li>
              <li>Sensory information (voice messages)</li>
              <li>Health information (wellness data, wearable device data)</li>
              <li>Inferences (health insights)</li>
            </ul>
            <p>
              <strong>Authorized Agent:</strong> You may designate an authorized agent to make requests on your behalf by providing written authorization.
            </p>
            <p>
              <strong>Verification:</strong> We will verify your identity before processing requests using email confirmation and account information.
            </p>
            <p>
              <strong>Contact for California Privacy Rights:</strong> support@fluxvita.com with subject &quot;California Privacy Request&quot;
            </p>
            <h3>13.2 Virginia, Colorado, Connecticut, Utah, and Other U.S. States</h3>
            <p>
              Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), and other states with comprehensive privacy laws have similar rights to:
            </p>
            <ul>
              <li>Access personal data</li>
              <li>Correct inaccuracies</li>
              <li>Delete personal data</li>
              <li>Obtain a copy of personal data</li>
              <li>Opt out of targeted advertising (we do not engage in targeted advertising)</li>
              <li>Opt out of sale of personal data (we do not sell personal data)</li>
            </ul>
            <p>
              <strong>Appeal Process:</strong> If we deny your privacy request, you have the right to appeal by emailing support@fluxvita.com with subject &quot;Privacy Appeal.&quot;
            </p>
            <h3>13.3 Nevada Residents</h3>
            <p>
              Nevada residents may opt out of the sale of personal information. We do not sell personal information as defined by Nevada law.
            </p>
            <h3>13.4 Washington State (My Health My Data Act)</h3>
            <p>Washington residents have enhanced protections for consumer health data:</p>
            <ul>
              <li>We collect explicit consent before collecting health data</li>
              <li>We do NOT sell consumer health data</li>
              <li>We implement heightened security measures for health data</li>
              <li>You have the right to withdraw consent and request deletion</li>
            </ul>
          </section>
        <section
            className="privacy-policy__section"
            id="changes-to-this-privacy-policy"
          >
            <h2>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
            </p>
            <ol>
              <li>Update the &quot;Last Updated&quot; date at the top</li>
              <li>Notify you via email or in-app notification</li>
              <li>For significant changes, request your consent if required by law</li>
            </ol>
            <p>
              <strong>Your continued use of the Services after changes take effect constitutes acceptance of the updated Privacy Policy.</strong>
            </p>
            <p>We encourage you to review this Privacy Policy periodically.</p>
          </section>
        <section className="privacy-policy__section" id="contact-us">
            <h2>15. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p>
              <strong>Fluxvita Corporation</strong>
              <br />
              Attn: Privacy Officer
              <br />
              8 THE GREEN Ste R
              <br />
              Dover, DE 19901
              <br />
              United States
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@fluxvita.com">support@fluxvita.com</a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="https://fluxvita.com">https://fluxvita.com</a>
              <br />
              <strong>Product Website:</strong>{" "}
              <a href="https://jovida.ai">https://jovida.ai</a>
            </p>
            <p>
              <strong>Response Time:</strong> We will respond to privacy inquiries within 30 days.
            </p>
            <p>
              <strong>End of Privacy Policy</strong>
            </p>
            <p>
              <em>
                This Privacy Policy was drafted to comply with applicable U.S. federal and state privacy laws, including CCPA/CPRA,
                VCDPA, CPA, CTDPA, UCPA, Washington My Health My Data Act, and GDPR (for basic compliance). It is designed to protect
                both user privacy and Fluxvita Corporation&apos;s business interests.
              </em>
            </p>
          </section>
      </div>
    </div>
  );
};
