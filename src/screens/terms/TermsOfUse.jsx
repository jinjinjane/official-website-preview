import React from "react";
import { SEO } from "../../components/SEO";
import "./style.css";

export const TermsOfUse = () => {
  return (
    <div className="terms-of-use">
      <SEO 
        title="Terms and Conditions" 
        description="Terms and Conditions for using Jovida services." 
      />
      <div className="terms-of-use__wrapper">
        <header className="terms-of-use__header">
          {/* <span
            aria-hidden="true"
            className="terms-of-use__icon"
            role="img"
          >
            📄
          </span> */}

          <div>
            <h1 className="terms-of-use__title">Terms and Conditions</h1>

            <p className="terms-of-use__subtitle">
              Fluxvita Corporation - jovida
            </p>

            <p className="terms-of-use__updated">
              Effective Date: Upon your acceptance and use of the Services
              <br />
              Last Updated: October 30, 2025
            </p>
          </div>
        </header>

        <section
          className="terms-of-use__section"
          id="table-of-contents"
        >
          <h2>Table of Contents</h2>

          <ol className="terms-of-use__toc">
            <li>
              <a href="#acceptance-of-terms">Acceptance of Terms</a>
            </li>
            <li>
              <a href="#changes-to-terms">Changes to Terms</a>
            </li>
            <li>
              <a href="#description-of-services">Description of Services</a>
            </li>
            <li>
              <a href="#eligibility-and-account-registration">
                Eligibility and Account Registration
              </a>
            </li>
            <li>
              <a href="#subscription-plans-and-payment">
                Subscription Plans and Payment
              </a>
            </li>
            <li>
              <a href="#free-trial">Free Trial</a>
            </li>
            <li>
              <a href="#cancellation-and-refunds">Cancellation and Refunds</a>
            </li>
            <li>
              <a href="#user-responsibilities-and-acceptable-use">
                User Responsibilities and Acceptable Use
              </a>
            </li>
            <li>
              <a href="#intellectual-property-rights">
                Intellectual Property Rights
              </a>
            </li>
            <li>
              <a href="#user-content-and-license">User Content and License</a>
            </li>
            <li>
              <a href="#ai-generated-content">AI-Generated Content</a>
            </li>
            <li>
              <a href="#health-and-medical-disclaimers">
                Health and Medical Disclaimers
              </a>
            </li>
            <li>
              <a href="#disclaimers-of-warranties">Disclaimers of Warranties</a>
            </li>
            <li>
              <a href="#limitation-of-liability">Limitation of Liability</a>
            </li>
            <li>
              <a href="#indemnification">Indemnification</a>
            </li>
            <li>
              <a href="#third-party-services-and-links">
                Third-Party Services and Links
              </a>
            </li>
            <li>
              <a href="#termination-and-suspension">Termination and Suspension</a>
            </li>
            <li>
              <a href="#dispute-resolution-and-arbitration">
                Dispute Resolution and Arbitration
              </a>
            </li>
            <li>
              <a href="#governing-law">Governing Law</a>
            </li>
            <li>
              <a href="#general-provisions">General Provisions</a>
            </li>
            <li>
              <a href="#contact-information">Contact Information</a>
            </li>
          </ol>
        </section>

        <section
          className="terms-of-use__section"
          id="acceptance-of-terms"
        >
          <h2>1. Acceptance of Terms</h2>

          <p>
            <strong>
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE
              SERVICES.
            </strong>
          </p>

          <p>
            These Terms and Conditions ("Terms," "Agreement") constitute a
            legally binding agreement between you ("you," "your," "User") and
            Fluxvita Corporation ("Fluxvita," "we," "us," "our") governing your
            access to and use of the jovida services, including:
          </p>

          <ul className="terms-of-use__list">
            <li>The jovida mobile application ("App")</li>
            <li>The website located at https://jovida.ai ("Website")</li>
            <li>
              AI coaching services provided through WhatsApp, iMessage, SMS,
              email, phone, and other communication channels
            </li>
            <li>
              All related features, content, and services (collectively, the
              "Services")
            </li>
          </ul>

          <p>
            By creating an account, accessing, or using the Services in any
            manner, you:
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>
              Acknowledge that you have read, understood, and agree to be bound
              by these Terms
            </li>
            <li>Agree to comply with all applicable laws and regulations</li>
            <li>Accept our Privacy Policy, which is incorporated by reference</li>
            <li>Represent that you meet the eligibility requirements in Section 4</li>
          </ol>

          <p>
            <strong>
              IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE THE
              SERVICES.
            </strong>
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="changes-to-terms"
        >
          <h2>2. Changes to Terms</h2>

          <p>
            We reserve the right to modify, update, or replace these Terms at
            any time at our sole discretion. Changes may be made to:
          </p>

          <ul className="terms-of-use__list">
            <li>Reflect changes in our Services or business practices</li>
            <li>Comply with legal or regulatory requirements</li>
            <li>Improve user experience or security</li>
            <li>Address unforeseen circumstances</li>
          </ul>

          <p>
            <strong>Notification of Changes:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              <strong>Material Changes:</strong> We will provide at least 30
              days&apos; advance notice via email or in-app notification
            </li>
            <li>
              <strong>Effective Date:</strong> Changes become effective on the
              date specified in the notification or upon your continued use of
              the Services, whichever is later
            </li>
            <li>
              <strong>Your Options:</strong> If you do not agree to the modified
              Terms, you must stop using the Services and may cancel your
              subscription
            </li>
          </ul>

          <p>
            Continued use of the Services after changes take effect constitutes
            your acceptance of the modified Terms.
          </p>

          <p>
            We encourage you to review these Terms periodically. The "Last
            Updated" date at the top indicates when the Terms were last revised.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="description-of-services"
        >
          <h2>3. Description of Services</h2>

          <p>
            Jovida is an AI-powered health and wellness coaching service
            designed to help users achieve their health goals through
            personalized guidance, motivation, and support.
          </p>

          <h3>3.1 Core Features</h3>

          <p>
            <strong>AI Coaching Conversations:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Text and voice-based interactions with AI coach</li>
            <li>Personalized nutrition advice and meal suggestions</li>
            <li>Activity and exercise recommendations</li>
            <li>Sleep optimization tips</li>
            <li>Motivational support and accountability</li>
          </ul>

          <p>
            <strong>Multi-Platform Access:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Mobile app (iOS and Android)</li>
            <li>Web platform (jovida.ai)</li>
            <li>WhatsApp, iMessage, SMS messaging</li>
            <li>Email and phone support</li>
          </ul>

          <p>
            <strong>Wearable Device Integration:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              Sync data from Apple Health, Google Fit, Fitbit, Garmin, Amazfit,
              Huawei Health, Xiaomi Health, and other platforms
            </li>
            <li>
              Automatic tracking of steps, heart rate, sleep, and other health
              metrics
            </li>
          </ul>

          <p>
            <strong>Daily Challenges and Gamification:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Personalized daily health challenges</li>
            <li>Progress tracking and achievement rewards</li>
            <li>Streak tracking and goal milestones</li>
          </ul>

          <p>
            <strong>Social Sharing:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              Share achievements on Twitter/X, Facebook, Instagram, TikTok
              (optional)
            </li>
          </ul>

          <h3>3.2 Service Limitations</h3>

          <p>
            <strong>
              IMPORTANT: THE SERVICES ARE PROVIDED FOR GENERAL WELLNESS AND
              LIFESTYLE COACHING PURPOSES ONLY. THE SERVICES ARE NOT INTENDED TO:
            </strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
            <li>Provide medical, therapeutic, or clinical advice</li>
            <li>Replace professional medical care or consultations with licensed healthcare providers</li>
            <li>Serve as a substitute for emergency medical services</li>
          </ul>

          <p>See Section 12 for complete health and medical disclaimers.</p>

          <h3>3.3 Service Availability</h3>

          <ul className="terms-of-use__list">
            <li>Services are provided on an "as available" basis</li>
            <li>We do not guarantee uninterrupted, timely, secure, or error-free service</li>
            <li>
              We may modify, suspend, or discontinue any feature or the entire
              Service at any time without liability
            </li>
            <li>Scheduled and emergency maintenance may temporarily limit access</li>
          </ul>

          <h3>3.4 Geographic Availability</h3>

          <p>
            The Services are primarily intended for users in the United States.
            Access from other countries may be permitted but is not guaranteed.
            You are responsible for compliance with local laws when accessing the
            Services from outside the United States.
          </p>

          <h3>3.5 SMS, WhatsApp, iMessage, and Phone Communications</h3>

          <p>
            <strong>
              By providing your phone number and using our Services through SMS,
              WhatsApp, iMessage, or phone, you expressly consent to receive
              communications from jovida as follows:
            </strong>
          </p>

          <p>
            <strong>Service-Related Messages (Non-Marketing):</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>AI coaching responses and health recommendations</li>
            <li>Account notifications and security alerts</li>
            <li>Subscription and payment confirmations</li>
            <li>Customer support communications</li>
            <li>Service updates and important announcements</li>
          </ul>

          <p>
            <strong>Message Frequency:</strong> Message frequency varies based on
            your usage and interactions with the AI coach. You may receive
            multiple messages per day depending on your coaching activity.
          </p>

          <p>
            <strong>Message and Data Rates:</strong> Standard SMS, data, and
            phone charges from your mobile carrier may apply. We are not
            responsible for carrier fees.
          </p>

          <p>
            <strong>Opt-Out Instructions:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              <strong>SMS:</strong> Reply "STOP" to any SMS message to
              unsubscribe from SMS communications
            </li>
            <li>
              <strong>WhatsApp/iMessage:</strong> Block our number or delete the
              conversation through your app
            </li>
            <li>
              <strong>Email:</strong> Contact support@fluxvita.com with subject
              "Unsubscribe Communications"
            </li>
          </ul>

          <p>
            <strong>Help:</strong> Reply "HELP" to any SMS message or contact
            support@fluxvita.com for assistance.
          </p>

          <p>
            <strong>Marketing Messages (Separate Consent Required):</strong> If
            we offer marketing or promotional messages in the future, we will
            request your separate written consent. Service-related communications
            are not marketing messages.
          </p>

          <p>
            <strong>Important Notice:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              Unsubscribing from communications may limit your ability to use
              certain features of the Services
            </li>
            <li>
              SMS/WhatsApp/iMessage are not end-to-end encrypted through our
              systems; do not share highly sensitive personal or medical
              information via these channels
            </li>
            <li>
              For emergency situations, always call 911 or your local emergency
              number - do not use our messaging services
            </li>
          </ul>

          <p>
            <strong>Carrier Participation:</strong> Supported carriers include
            AT&amp;T, T-Mobile, Verizon, Sprint, and other major U.S. carriers.
            Availability may vary.
          </p>

          <p>
            <strong>
              By continuing to use our SMS, WhatsApp, iMessage, or phone
              services, you confirm your ongoing consent to receive communications
              as described above.
            </strong>
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="eligibility-and-account-registration"
        >
          <h2>4. Eligibility and Account Registration</h2>

          <h3>4.1 Age Requirement</h3>

          <p>
            <strong>You must be at least 18 years of age to use the Services.</strong>
          </p>

          <p>By using the Services, you represent and warrant that:</p>

          <ul className="terms-of-use__list">
            <li>You are 18 years of age or older</li>
            <li>You have the legal capacity to enter into this binding Agreement</li>
            <li>You are not prohibited from using the Services under applicable law</li>
          </ul>

          <p>
            We do not knowingly collect information from or permit use by individuals under 18 years of age.
          </p>

          <h3>4.2 Account Creation</h3>

          <p>
            To access certain features, you must create an account by providing:
          </p>

          <ul className="terms-of-use__list">
            <li>Accurate and complete information</li>
            <li>A valid email address</li>
            <li>A secure password</li>
            <li>Other information as requested</li>
          </ul>

          <p>
            <strong>You are responsible for:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use or security breach</li>
          </ul>

          <p>
            <strong>
              We are not liable for any loss or damage arising from unauthorized
              access to your account due to your failure to maintain security.
            </strong>
          </p>

          <h3>4.3 Account Restrictions</h3>

          <p>
            You may only create one account. Multiple accounts by the same individual are prohibited unless expressly authorized by us.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="subscription-plans-and-payment"
        >
          <h2>5. Subscription Plans and Payment</h2>

          <h3>5.1 Subscription Options</h3>

          <p>Jovida offers the following subscription plans:</p>

          <ul className="terms-of-use__list">
            <li>
              <strong>Monthly Subscription:</strong> Billed monthly
            </li>
            <li>
              <strong>Annual Subscription:</strong> Billed yearly at a discounted rate
            </li>
          </ul>

          <p>
            Pricing is displayed in the App and on the Website. All fees are in U.S. Dollars unless otherwise stated.
          </p>

          <h3>5.2 Payment Methods</h3>

          <p>We accept payment via:</p>

          <ul className="terms-of-use__list">
            <li>Apple Pay</li>
            <li>Google Pay</li>
            <li>Credit/debit cards (Visa, Mastercard, American Express, Discover)</li>
            <li>PayPal</li>
            <li>Stripe payment processing</li>
          </ul>

          <p>
            <strong>Third-Party Payment Processors:</strong> Payment processing is handled by third-party providers (Stripe, Apple, Google, PayPal). By providing payment information, you agree to their terms of service and privacy policies. We do not store full credit card numbers on our servers.
          </p>

          <h3>5.3 Automatic Renewal</h3>

          <p>
            <strong>SUBSCRIPTIONS AUTOMATICALLY RENEW UNLESS CANCELED BEFORE THE RENEWAL DATE.</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              Your subscription will automatically renew at the end of each billing period (monthly or annually)
            </li>
            <li>
              Renewal charges will be billed to your payment method on file
            </li>
            <li>
              The renewal rate will be the then-current subscription price (we will notify you of price changes in advance)
            </li>
            <li>
              To avoid charges, you must cancel before the renewal date (see Section 7)
            </li>
          </ul>

          <p>
            <strong>Renewal Reminders (California and All U.S. Users):</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              <strong>For Annual Subscriptions:</strong> We will send you a renewal reminder email 15-45 days before your subscription renews, clearly stating the renewal date and amount
            </li>
            <li>
              <strong>For Promotional/Trial Periods &gt; 31 Days:</strong> We will send a reminder 3-21 days before the promotional period ends and charges begin
            </li>
            <li>
              <strong>For 3-Day Free Trial:</strong> We will send a reminder 24 hours before the trial ends and your payment method is charged
            </li>
          </ul>

          <p>
            These reminders apply to all U.S. customers to ensure transparency and comply with California&apos;s Automatic Renewal Law (ARL) and similar state requirements.
          </p>

          <h3>5.4 Price Changes</h3>

          <p>We reserve the right to change subscription prices at any time. For existing subscribers:</p>

          <ul className="terms-of-use__list">
            <li>We will provide at least 30 days&apos; advance notice of price increases</li>
            <li>The new price will apply starting with your next renewal after the notice period</li>
            <li>You may cancel your subscription before the new price takes effect to avoid the increase</li>
          </ul>

          <h3>5.5 Taxes</h3>

          <p>
            All fees are exclusive of applicable taxes (sales tax, VAT, GST, etc.). You are responsible for paying any taxes imposed by your jurisdiction.
          </p>

          <h3>5.6 Failed Payments</h3>

          <p>If payment fails:</p>

          <ul className="terms-of-use__list">
            <li>We will attempt to charge your payment method multiple times</li>
            <li>Your access to premium features may be suspended</li>
            <li>Your subscription may be canceled if payment is not received within a reasonable time</li>
            <li>You remain responsible for unpaid fees</li>
          </ul>
        </section>

        <section
          className="terms-of-use__section"
          id="free-trial"
        >
          <h2>6. Free Trial</h2>

          <h3>6.1 Trial Period</h3>

          <p>
            We may offer a 3-day free trial for new subscribers. Trial eligibility and terms may vary and will be displayed during signup.
          </p>

          <h3>6.2 Trial to Paid Subscription</h3>

          <p>
            <strong>AUTOMATIC CONVERSION:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              At the end of the free trial, your subscription will automatically convert to a paid subscription and your payment method will be charged
            </li>
            <li>To avoid charges, you must cancel before the trial period ends</li>
            <li>Cancellation during the trial period will result in immediate loss of access to premium features</li>
          </ul>

          <h3>6.3 Trial Limitations</h3>

          <ul className="terms-of-use__list">
            <li>Free trials are limited to one per user (per email address, payment method, or device)</li>
            <li>
              We reserve the right to determine trial eligibility and deny trials to users who have previously subscribed or violated these Terms
            </li>
            <li>Trial terms may not be combined with other offers unless explicitly stated</li>
          </ul>
        </section>

        <section
          className="terms-of-use__section"
          id="cancellation-and-refunds"
        >
          <h2>7. Cancellation and Refunds</h2>

          <h3>7.1 How to Cancel</h3>

          <p>
            <strong>Easy Online Cancellation:</strong> We provide a cancellation process that is as easy and convenient as the signup process, with no additional obstacles or retention tactics. You may cancel your subscription at any time through the following methods:
          </p>

          <p>
            <strong>In-App (Easiest Method):</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Go to Account Settings</li>
            <li>Select "Subscription"</li>
            <li>Click "Cancel Subscription" (instant, no phone call or email required)</li>
          </ol>

          <p>
            <strong>For App Store Subscriptions (iOS):</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Open iPhone Settings -&gt; Your Name -&gt; Subscriptions</li>
            <li>Select jovida subscription</li>
            <li>Tap "Cancel Subscription"</li>
          </ol>

          <p>
            <strong>For Google Play Subscriptions (Android):</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Open Google Play Store -&gt; Menu -&gt; Subscriptions</li>
            <li>Select jovida subscription</li>
            <li>Tap "Cancel Subscription"</li>
          </ol>

          <p>
            <strong>Via Email (Alternative):</strong> Email support@fluxvita.com with subject "Cancel Subscription" and we will process your cancellation within 1 business day.
          </p>

          <p>
            <strong>Important:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Deleting the app does NOT cancel your subscription</li>
            <li>No phone call, chat, or additional steps are required for cancellation</li>
            <li>Cancellation is effective immediately for future billing cycles</li>
          </ul>

          <h3>7.2 Effect of Cancellation</h3>

          <ul className="terms-of-use__list">
            <li>Cancellation takes effect at the end of your current billing period</li>
            <li>You will retain access to premium features until the subscription expires</li>
            <li>No refund will be provided for the remaining portion of the current billing period (except as provided in Section 7.3)</li>
          </ul>

          <h3>7.3 Refund Policy</h3>

          <p>
            <strong>GENERAL POLICY: NO REFUNDS</strong>
          </p>

          <p>
            <strong>Except as required by law, all subscription fees are non-refundable.</strong> This includes:
          </p>

          <ul className="terms-of-use__list">
            <li>Unused portions of subscription periods</li>
            <li>Dissatisfaction with the Services</li>
            <li>Failure to use the Services</li>
            <li>Account termination by you or us (unless termination was in error)</li>
          </ul>

          <p>
            <strong>EXCEPTION: 3-DAY COOLING-OFF PERIOD FOR U.S. CUSTOMERS</strong>
          </p>

          <p>
            <strong>U.S. customers may request a full refund within 3 days of the initial purchase or renewal</strong> by:
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Emailing support@fluxvita.com with subject "Refund Request"</li>
            <li>Including your account email, purchase date, and reason for refund</li>
            <li>Submitting the request within 3 days (72 hours) of payment</li>
          </ol>

          <p>
            <strong>Note:</strong> This cooling-off period does not apply to free trial conversions - the 3-day period begins after the first paid charge.
          </p>

          <h3>7.4 App Store and Google Play Refunds</h3>

          <ul className="terms-of-use__list">
            <li>For subscriptions purchased through Apple App Store or Google Play Store, refund requests must be made directly to Apple or Google</li>
            <li>We cannot process refunds for those purchases</li>
            <li>Refer to Apple&apos;s or Google&apos;s refund policies</li>
          </ul>
        </section>

        <section
          className="terms-of-use__section"
          id="user-responsibilities-and-acceptable-use"
        >
          <h2>8. User Responsibilities and Acceptable Use</h2>

          <h3>8.1 Your Responsibilities</h3>

          <p>You agree to:</p>

          <ul className="terms-of-use__list">
            <li>Provide accurate, current, and complete information</li>
            <li>Update your information promptly if it changes</li>
            <li>Use the Services only for lawful, legitimate purposes</li>
            <li>Comply with all applicable laws and these Terms</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use the Services in a manner consistent with their intended purpose</li>
          </ul>

          <h3>8.2 Prohibited Conduct</h3>

          <p>You agree NOT to:</p>

          <p>
            <strong>Misuse the Services:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Use the Services for any illegal purpose or to violate any laws</li>
            <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
            <li>Use the Services to harm minors in any way</li>
            <li>Harass, abuse, threaten, or intimidate other users or our personnel</li>
          </ul>

          <p>
            <strong>Compromise Security:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Attempt to gain unauthorized access to the Services, other accounts, or computer systems</li>
            <li>Use any automated means (bots, scripts, scrapers) to access the Services without permission</li>
            <li>Interfere with or disrupt the Services or servers/networks connected to the Services</li>
            <li>Introduce viruses, malware, or other harmful code</li>
          </ul>

          <p>
            <strong>Infringe Rights:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Violate any intellectual property rights of Fluxvita or third parties</li>
            <li>Copy, modify, distribute, or create derivative works of the Services without authorization</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
          </ul>

          <p>
            <strong>Abuse the Services:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Create multiple accounts to abuse promotions or evade restrictions</li>
            <li>Share your account credentials with others</li>
            <li>Use the Services for commercial purposes without our written consent</li>
            <li>Resell, redistribute, or sublicense access to the Services</li>
            <li>Extract data for competitive or commercial purposes</li>
          </ul>

          <p>
            <strong>Misrepresent Information:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Provide false or misleading health information that could result in harmful AI recommendations</li>
            <li>Manipulate the Services to generate inappropriate or dangerous advice</li>
          </ul>

          <h3>8.3 Consequences of Violations</h3>

          <p>Violation of these Terms may result in:</p>

          <ul className="terms-of-use__list">
            <li>Warning or temporary suspension of your account</li>
            <li>Permanent termination of your account without refund</li>
            <li>Legal action, including seeking damages and injunctive relief</li>
            <li>Reporting to law enforcement if illegal activity is suspected</li>
          </ul>
        </section>

        <section
          className="terms-of-use__section"
          id="intellectual-property-rights"
        >
          <h2>9. Intellectual Property Rights</h2>

          <h3>9.1 Ownership of Services</h3>

          <p>
            The Services, including all content, features, functionality, software, code, algorithms, AI models, designs, graphics, logos, trademarks, and documentation (collectively, "Fluxvita IP"), are owned by Fluxvita Corporation and are protected by U.S. and international intellectual property laws.
          </p>

          <p>
            <strong>You acknowledge and agree that:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Fluxvita retains all right, title, and interest in the Fluxvita IP</li>
            <li>These Terms do not grant you any ownership rights in the Fluxvita IP</li>
            <li>You may not use Fluxvita trademarks, logos, or branding without our prior written consent</li>
          </ul>

          <h3>9.2 Limited License to Use Services</h3>

          <p>
            Subject to your compliance with these Terms, Fluxvita grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
          </p>

          <ul className="terms-of-use__list">
            <li>Access and use the Services for your personal, non-commercial purposes</li>
            <li>Download and use the App on devices you own or control</li>
          </ul>

          <p>
            <strong>This license does NOT permit you to:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Copy, modify, or create derivative works of the Services</li>
            <li>Distribute, sell, lease, or sublicense the Services</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Remove or alter any proprietary notices</li>
          </ul>

          <h3>9.3 Trademarks</h3>

          <p>
            "jovida," "Fluxvita," and associated logos are trademarks or registered trademarks of Fluxvita Corporation. Other trademarks, service marks, and trade names appearing in the Services are the property of their respective owners.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="user-content-and-license"
        >
          <h2>10. User Content and License</h2>

          <h3>10.1 User Content Definition</h3>

          <p>
            "User Content" means any information, data, text, messages, photos, health data, and other materials you submit, upload, or transmit to the Services, including:
          </p>

          <ul className="terms-of-use__list">
            <li>Profile information and health data</li>
            <li>Messages and conversations with the AI coach</li>
            <li>Voice recordings</li>
            <li>Photos of meals or activities</li>
            <li>Feedback and survey responses</li>
          </ul>

          <h3>10.2 Your Ownership</h3>

          <p>
            You retain ownership of your User Content. However, by submitting User Content to the Services, you grant Fluxvita certain rights as described below.
          </p>

          <h3>10.3 License Grant to Fluxvita</h3>

          <p>
            By submitting User Content, you grant Fluxvita a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to:
          </p>

          <p>
            <strong>Use, store, and process your User Content to:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Provide the Services to you</li>
            <li>Generate personalized AI coaching responses</li>
            <li>
              Train, test, and improve our AI models and algorithms (subject to
              your consent settings in the Privacy Policy)
            </li>
            <li>Analyze usage patterns and improve the Services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <p>
            <strong>Create derivative works from your User Content, such as:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>De-identified, aggregated data for research and analytics</li>
            <li>Insights and trends derived from user data</li>
            <li>AI training datasets</li>
          </ul>

          <p>
            <strong>Important Limitations:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>We will use your identifiable User Content primarily to provide Services to you</li>
            <li>AI training use is subject to your consent (you can opt out in Settings)</li>
            <li>We will NOT publicly display your identifiable User Content without your permission</li>
            <li>Research and analytics use will generally involve de-identified data (see Privacy Policy)</li>
          </ul>

          <h3>10.4 Representations and Warranties</h3>

          <p>By submitting User Content, you represent and warrant that:</p>

          <ul className="terms-of-use__list">
            <li>You own or have the necessary rights to grant the above license</li>
            <li>Your User Content does not violate any third-party rights (intellectual property, privacy, publicity, etc.)</li>
            <li>Your User Content complies with these Terms and applicable laws</li>
            <li>Your User Content is accurate and not misleading</li>
          </ul>

          <h3>10.5 Prohibited User Content</h3>

          <p>You may not submit User Content that:</p>

          <ul className="terms-of-use__list">
            <li>Infringes intellectual property rights</li>
            <li>Violates privacy or publicity rights</li>
            <li>Is illegal, harmful, threatening, abusive, harassing, defamatory, or obscene</li>
            <li>Contains viruses or malicious code</li>
            <li>Impersonates others or is fraudulent</li>
          </ul>

          <h3>10.6 Monitoring and Removal</h3>

          <p>
            <strong>We have the right, but not the obligation, to:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Monitor User Content for compliance with these Terms</li>
            <li>Remove or refuse to display User Content that violates these Terms</li>
            <li>Terminate accounts of repeat violators</li>
          </ul>

          <p>
            <strong>
              We do not pre-screen User Content and are not responsible for User
              Content submitted by users.
            </strong>
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="ai-generated-content"
        >
          <h2>11. AI-Generated Content</h2>

          <h3>11.1 AI-Generated Content Definition</h3>

          <p>
            "AI-Generated Content" means content created by our AI systems in response to your inputs, including:
          </p>

          <ul className="terms-of-use__list">
            <li>Personalized meal plans and nutrition advice</li>
            <li>Exercise and activity recommendations</li>
            <li>Sleep optimization suggestions</li>
            <li>Motivational messages and coaching responses</li>
            <li>Health insights and progress summaries</li>
          </ul>

          <h3>11.2 Ownership and Rights</h3>

          <p>The ownership and use of AI-Generated Content is subject to evolving legal standards. To provide clarity:</p>

          <p>
            <strong>Fluxvita&apos;s Rights:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>We retain ownership of the AI systems, algorithms, and models that generate the content</li>
            <li>
              We have a non-exclusive license to use AI-Generated Content for Service operation, improvement, and research
            </li>
          </ul>

          <p>
            <strong>Your Rights:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              You may use AI-Generated Content for your personal, non-commercial purposes (following the advice, saving meal plans, etc.)
            </li>
            <li>
              You may share AI-Generated Content on social media or with friends (with attribution to jovida encouraged)
            </li>
          </ul>

          <p>
            <strong>Restrictions:</strong> You may NOT:
          </p>

          <ul className="terms-of-use__list">
            <li>Use AI-Generated Content for commercial purposes (e.g., selling meal plans, creating competing products)</li>
            <li>Represent AI-Generated Content as solely your own original work in commercial contexts</li>
            <li>Use AI-Generated Content in ways that violate third-party rights</li>
          </ul>

          <h3>11.3 No Warranty of AI-Generated Content</h3>

          <p>
            AI-Generated Content is provided "as is" without warranties of any kind. See Section 13 for complete disclaimers regarding accuracy, reliability, and fitness for purpose.
          </p>

          <p>
            <strong>
              IMPORTANT: Do not rely solely on AI-Generated Content for critical health decisions. Always consult qualified healthcare professionals.
            </strong>
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="health-and-medical-disclaimers"
        >
          <h2>12. Health and Medical Disclaimers</h2>

          <p>
            <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</strong>
          </p>

          <h3>12.1 Not Medical Advice or Services</h3>

          <p>
            <strong>
              THE SERVICES, INCLUDING ALL AI-GENERATED CONTENT, ARE FOR GENERAL INFORMATIONAL, EDUCATIONAL, AND MOTIVATIONAL PURPOSES ONLY. THE SERVICES DO NOT CONSTITUTE MEDICAL ADVICE, DIAGNOSIS, TREATMENT, OR PROFESSIONAL HEALTH CARE SERVICES.
            </strong>
          </p>

          <p>
            <strong>The Services are NOT a substitute for:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Consultation with qualified healthcare professionals (doctors, dietitians, therapists, etc.)</li>
            <li>Professional medical diagnosis or treatment</li>
            <li>Emergency medical services</li>
          </ul>

          <h3>12.2 No Doctor-Patient Relationship</h3>

          <p>
            <strong>
              USE OF THE SERVICES DOES NOT CREATE A DOCTOR-PATIENT, THERAPIST-PATIENT, OR ANY OTHER PROFESSIONAL-CLIENT RELATIONSHIP between you and Fluxvita, our AI systems, or our personnel.
            </strong>
          </p>

          <h3>12.3 Consult Healthcare Professionals</h3>

          <p>
            <strong>You should always:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              Consult with your physician or other qualified healthcare provider before starting any new diet, exercise, or wellness program
            </li>
            <li>
              Seek professional medical advice for any questions regarding a medical condition, symptoms, or treatment
            </li>
            <li>
              Never disregard professional medical advice or delay seeking it because of something you read or receive through the Services
            </li>
            <li>Inform your healthcare providers about your use of the Services</li>
          </ul>

          <h3>12.4 Medical Emergencies</h3>

          <p>
            <strong>
              IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL 911 (U.S.) OR YOUR LOCAL EMERGENCY NUMBER IMMEDIATELY. DO NOT USE THE SERVICES FOR EMERGENCY MEDICAL ASSISTANCE.
            </strong>
          </p>

          <p>The Services are not designed for or capable of providing emergency assistance.</p>

          <h3>12.5 Health Risks and Disclaimers</h3>

          <p>
            <strong>You acknowledge and agree that:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              <strong>Individual Variation:</strong> Health and wellness advice that works for some individuals may not be appropriate for you. Your health status, medical conditions, medications, allergies, and other factors affect what is safe and effective.
            </li>
            <li>
              <strong>AI Limitations:</strong> Our AI systems are based on general health information and patterns. They cannot replace the individualized assessment of a licensed healthcare professional who knows your complete medical history.
            </li>
            <li>
              <strong>Accuracy Not Guaranteed:</strong> Nutritional information, calorie estimates, health insights, and other data may be inaccurate or outdated. We rely on third-party data sources and user input, which may contain errors.
            </li>
            <li>
              <strong>Wearable Device Data:</strong> Data from wearable devices and health apps may be inaccurate or incomplete. We are not responsible for the accuracy of third-party device data.
            </li>
            <li>
              <strong>Food Safety and Allergies:</strong> We do not guarantee that meal suggestions or recipes are safe for your specific dietary needs, allergies, or restrictions. Always verify ingredients and consult professionals if you have food allergies or sensitivities.
            </li>
            <li>
              <strong>Exercise Risks:</strong> Physical activity carries inherent risks of injury. Our exercise recommendations do not account for your physical condition, limitations, or injury history. Consult a doctor before starting any exercise program.
            </li>
            <li>
              <strong>Mental Health:</strong> If you are experiencing mental health issues, depression, anxiety, or suicidal thoughts, seek help from a licensed mental health professional immediately. Call the National Suicide Prevention Lifeline at 988 (U.S.) or your local crisis hotline.
            </li>
          </ul>

          <h3>12.6 User Responsibility for Health Decisions</h3>

          <p>
            <strong>YOU ARE SOLELY RESPONSIBLE FOR:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Decisions you make based on information from the Services</li>
            <li>Evaluating the suitability of any advice or recommendations for your individual circumstances</li>
            <li>Monitoring your health and seeking professional care when needed</li>
            <li>Informing us of any adverse events (email: support@fluxvita.com)</li>
          </ul>

          <h3>12.7 No Endorsement</h3>

          <p>
            We do not endorse any specific tests, products, procedures, opinions, or other information mentioned in the Services or User Content. Any reliance on such information is solely at your own risk.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="disclaimers-of-warranties"
        >
          <h2>13. Disclaimers of Warranties</h2>

          <p>
            <strong>PLEASE READ THIS SECTION CAREFULLY. IT LIMITS OUR LIABILITY.</strong>
          </p>

          <h3>13.1 "AS IS" and "As Available" Basis</h3>

          <p>
            <strong>
              TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </strong>
          </p>

          <p>
            <strong>FLUXVITA EXPLICITLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>
              <strong>Merchantability:</strong> Fitness for any particular purpose
            </li>
            <li>
              <strong>Non-Infringement:</strong> That the Services do not violate third-party rights
            </li>
            <li><strong>Title:</strong> Clear ownership of content</li>
            <li><strong>Accuracy:</strong> Correctness or reliability of content</li>
            <li><strong>Quiet Enjoyment:</strong> Uninterrupted use</li>
            <li><strong>Quality:</strong> Meeting your expectations</li>
            <li><strong>Security:</strong> Freedom from viruses, bugs, or errors</li>
          </ul>

          <h3>13.2 No Guarantee of Results</h3>

          <p>
            <strong>WE DO NOT GUARANTEE, REPRESENT, OR WARRANT THAT:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>The Services will meet your needs or expectations</li>
            <li>The Services will be uninterrupted, timely, secure, or error-free</li>
            <li>Any defects or errors will be corrected</li>
            <li>The Services or servers are free of viruses or harmful components</li>
            <li>
              Results, advice, or information obtained through the Services will be accurate, reliable, or complete
            </li>
            <li>You will achieve any specific health, fitness, or wellness outcome</li>
          </ul>

          <h3>13.3 AI Technology Limitations</h3>

          <p>
            <strong>ARTIFICIAL INTELLIGENCE TECHNOLOGY HAS INHERENT LIMITATIONS:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>AI systems may generate incorrect, incomplete, biased, or misleading information</li>
            <li>AI responses are based on patterns in training data and may not be appropriate for your specific situation</li>
            <li>AI cannot replace human judgment, especially in health-related matters</li>
            <li>AI models are continuously improved but may contain errors or outdated information</li>
          </ul>

          <p>
            <strong>YOU USE AI-GENERATED CONTENT AT YOUR OWN RISK.</strong>
          </p>

          <h3>13.4 Third-Party Content and Services</h3>

          <p>
            We are not responsible for content provided by third parties (wearable device data, social media integrations, etc.), the availability, accuracy, or reliability of third-party services, or actions of third-party service providers.
          </p>

          <h3>13.5 User Content</h3>

          <p>
            We do not endorse, support, or guarantee the accuracy of User Content. Any reliance on User Content is at your own risk.
          </p>

          <h3>13.6 Changes to Services</h3>

          <p>
            We may modify, suspend, or discontinue any aspect of the Services at any time without notice or liability. Features you rely on may be changed or removed.
          </p>

          <h3>13.7 Geographic Limitations</h3>

          <p>
            The Services may not be available in all geographic locations. We do not warrant that the Services are appropriate or available for use outside the United States.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="limitation-of-liability"
        >
          <h2>14. Limitation of Liability</h2>

          <p>
            <strong>PLEASE READ THIS SECTION CAREFULLY. IT LIMITS THE AMOUNT YOU CAN RECOVER FROM US.</strong>
          </p>

          <h3>14.1 Exclusion of Damages</h3>

          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLUXVITA, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND SERVICE PROVIDERS (COLLECTIVELY, "FLUXVITA PARTIES") SHALL NOT BE LIABLE FOR ANY:
            </strong>
          </p>

          <p>
            <strong>Indirect, Incidental, Special, Consequential, or Punitive Damages, including but not limited to:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Loss of profits, revenue, or business</li>
            <li>Loss of data or information</li>
            <li>Loss of goodwill or reputation</li>
            <li>Personal injury or property damage</li>
            <li>Emotional distress</li>
            <li>Cost of substitute services</li>
            <li>Health complications or medical expenses arising from use of the Services</li>
          </ul>

          <p>
            <strong>This exclusion applies regardless of:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>The legal theory (contract, tort, negligence, strict liability, or otherwise)</li>
            <li>Whether we were advised of the possibility of such damages</li>
            <li>Whether damages were foreseeable</li>
          </ul>

          <h3>14.2 Cap on Liability</h3>

          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF FLUXVITA PARTIES FOR ANY CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED:
            </strong>
          </p>

          <ul className="terms-of-use__list">
            <li>The total amount you actually paid to Fluxvita in the 12 months immediately preceding the event giving rise to liability</li>
          </ul>

          <p>
            This limitation applies to the fullest extent permitted by applicable law.
          </p>

          <h3>14.3 Basis of the Bargain</h3>

          <p>
            You acknowledge that the disclaimers and limitations in these Terms reflect a reasonable allocation of risk between you and Fluxvita, are a fundamental basis of the bargain, and will apply even if any remedy fails its essential purpose.
          </p>

          <p>
            <strong>Without these limitations, we could not provide the Services at the current pricing.</strong>
          </p>

          <h3>14.4 Exceptions</h3>

          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain warranties or damages. In such jurisdictions, our liability is limited to the fullest extent permitted by law. Nothing in these Terms limits liability that cannot be limited under applicable law (e.g., liability for gross negligence, fraud, or willful misconduct).
          </p>

          <h3>14.5 Separate Causes of Action</h3>

          <p>
            Each provision of Sections 13 and 14 applies separately to each cause of action and continues in effect even if other provisions are held invalid or unenforceable.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="indemnification"
        >
          <h2>15. Indemnification</h2>

          <h3>15.1 Your Obligation to Indemnify</h3>

          <p>
            <strong>
              You agree to defend, indemnify, and hold harmless Fluxvita Parties from and against any and all claims, liabilities, damages, losses, costs, expenses, and fees (including reasonable attorneys&apos; fees) arising out of or relating to:
            </strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Your use or misuse of the Services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any law, regulation, or third-party rights</li>
            <li>Your User Content, including any infringement of intellectual property rights or privacy violations</li>
            <li>Your health decisions or actions based on the Services</li>
            <li>Any false or misleading information you provide</li>
            <li>
              Access to the Services using your account credentials, whether authorized or unauthorized, if caused by your failure to maintain account security
            </li>
          </ol>

          <h3>15.2 Defense and Settlement</h3>

          <p>Fluxvita reserves the right to:</p>

          <ul className="terms-of-use__list">
            <li>Assume exclusive defense and control of any matter subject to indemnification</li>
            <li>Require your cooperation in defense at your expense</li>
            <li>Approve any settlement that affects our rights or interests</li>
          </ul>

          <p>
            You may not settle any claim without our prior written consent if the settlement imposes any obligation or liability on Fluxvita.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="third-party-services-and-links"
        >
          <h2>16. Third-Party Services and Links</h2>

          <h3>16.1 Third-Party Integrations</h3>

          <p>The Services integrate with third-party platforms, including:</p>

          <ul className="terms-of-use__list">
            <li>Payment processors (Stripe, Apple Pay, Google Pay, PayPal)</li>
            <li>
              Wearable device platforms (Apple Health, Google Fit, Fitbit, Garmin, Amazfit, Huawei Health, Xiaomi Health, etc.)
            </li>
            <li>Social media platforms (Twitter/X, Facebook, Instagram, TikTok)</li>
            <li>Communication platforms (WhatsApp, iMessage, SMS providers, email services)</li>
            <li>AI service providers (OpenAI, Anthropic, Google)</li>
          </ul>

          <h3>16.2 Third-Party Terms Apply</h3>

          <p>
            <strong>When you use third-party services:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>You agree to comply with their respective terms of service and privacy policies</li>
            <li>Your use is governed by their terms, not solely by these Terms</li>
            <li>We are not responsible for their practices or availability</li>
          </ul>

          <h3>16.3 Third-Party Links</h3>

          <p>
            The Services may contain links to third-party websites, apps, or resources. We provide these links for convenience only and do not:
          </p>

          <ul className="terms-of-use__list">
            <li>Endorse or approve the content, products, or services</li>
            <li>Control or take responsibility for third-party sites</li>
            <li>Warrant the accuracy or safety of third-party content</li>
          </ul>

          <p>You access third-party sites at your own risk.</p>

          <h3>16.4 No Liability for Third Parties</h3>

          <p>
            <strong>Fluxvita is not liable for:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Actions, omissions, or content of third parties</li>
            <li>Unavailability or errors in third-party services</li>
            <li>Data breaches or security issues at third parties</li>
            <li>Disputes between you and third parties</li>
          </ul>
        </section>

        <section
          className="terms-of-use__section"
          id="termination-and-suspension"
        >
          <h2>17. Termination and Suspension</h2>

          <h3>17.1 Termination by You</h3>

          <p>
            You may terminate this Agreement at any time by:
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Canceling your subscription (see Section 7.1)</li>
            <li>Deleting your account in Settings</li>
            <li>Emailing support@fluxvita.com with a termination request</li>
          </ol>

          <p>
            <strong>Effect:</strong> Upon termination, your access to the Services will cease at the end of the current billing period (or immediately if you delete your account).
          </p>

          <h3>17.2 Termination or Suspension by Fluxvita</h3>

          <p>
            <strong>We may, at our sole discretion and without liability:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Suspend your account temporarily for investigation</li>
            <li>Terminate your account and access to the Services</li>
            <li>Remove or disable any User Content</li>
          </ul>

          <p>
            <strong>Grounds for termination or suspension include, but are not limited to:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Violation of these Terms or our policies</li>
            <li>Fraudulent, abusive, or illegal activity</li>
            <li>Non-payment of fees</li>
            <li>Prolonged inactivity</li>
            <li>Requests by law enforcement or legal process</li>
            <li>Technical or security concerns</li>
            <li>Any other reason at our discretion</li>
          </ul>

          <h3>17.3 Notice</h3>

          <p>
            We will generally provide advance notice of termination or suspension, except in cases involving serious violations, illegal activity, security threats, repeated violations, or legal or safety concerns. In such cases, we may terminate immediately without notice.
          </p>

          <h3>17.4 Effect of Termination</h3>

          <p>
            Upon termination by either party:
          </p>

          <ul className="terms-of-use__list">
            <li>
              <strong>Access:</strong> Your right to access and use the Services immediately ceases
            </li>
            <li>
              <strong>Data:</strong> We will retain and delete your data according to our Privacy Policy (see Section 6)
            </li>
            <li>
              <strong>No Refunds:</strong> You will not receive a refund for any unused subscription period (except as provided in Section 7.3)
            </li>
            <li>
              <strong>Survival:</strong> Sections that by their nature should survive termination will survive, including Sections 9, 10.3, 12, 13, 14, 15, 18, and 20
            </li>
            <li>
              <strong>Obligations:</strong> You remain liable for any accrued obligations (unpaid fees, indemnification, etc.)
            </li>
          </ul>
        </section>

        <section
          className="terms-of-use__section"
          id="dispute-resolution-and-arbitration"
        >
          <h2>18. Dispute Resolution and Arbitration</h2>

          <p>
            <strong>
              PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
            </strong>
          </p>

          <h3>18.1 Informal Dispute Resolution (Mandatory First Step)</h3>

          <p>
            <strong>
              Before initiating arbitration or litigation, you and Fluxvita agree to attempt to resolve disputes informally for 60 days.
            </strong>
          </p>

          <p>
            <strong>Process:</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>
              <strong>Notification:</strong> Send a detailed written description of the dispute to support@fluxvita.com with subject "Dispute Notice" including your name, account email, description of dispute, and desired resolution
            </li>
            <li>
              <strong>Negotiation:</strong> Both parties will make good-faith efforts to resolve the dispute within 60 days
            </li>
            <li>
              <strong>Escalation:</strong> If unresolved after 60 days, either party may initiate arbitration
            </li>
          </ol>

          <p>
            <strong>
              This informal resolution process is a prerequisite to arbitration. Failure to complete it may result in dismissal of your arbitration claim.
            </strong>
          </p>

          <h3>18.2 Binding Arbitration</h3>

          <p>
            <strong>
              AGREEMENT TO ARBITRATE: If the informal process does not resolve the dispute, you and Fluxvita agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules then in effect.
            </strong>
          </p>

          <p>You and Fluxvita waive the right to have disputes resolved in court by a judge or jury.</p>

          <h3>18.3 Arbitration Procedure</h3>

          <p>
            <strong>Initiating Arbitration:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>File a demand for arbitration with AAA at https://www.adr.org or by calling 1-800-778-7879</li>
            <li>Provide a copy to Fluxvita at support@fluxvita.com</li>
          </ul>

          <p>
            <strong>Rules:</strong> Arbitration will be conducted under AAA Consumer Arbitration Rules available at https://www.adr.org/consumer
          </p>

          <p>
            <strong>Arbitrator:</strong> A single neutral arbitrator will be selected according to AAA rules
          </p>

          <p>
            <strong>Location:</strong> In-person hearings will occur in the federal judicial district where you reside or another mutually agreed location. Remote hearings may be conducted by phone or video conference if both parties agree.
          </p>

          <p>
            <strong>Language:</strong> English
          </p>

          <p>
            <strong>Discovery:</strong> Limited discovery as permitted by the arbitrator consistent with AAA rules
          </p>

          <p>
            <strong>Decision:</strong> The arbitrator&apos;s decision will be final and binding, with limited grounds for appeal under applicable law
          </p>

          <h3>18.4 Arbitration Fees</h3>

          <p>
            <strong>Filing Fees:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>For claims under $10,000: Fluxvita will pay all AAA filing, administration, and arbitrator fees beyond the first $200, which you are responsible for</li>
            <li>For claims $10,000 or more: Fees will be allocated according to AAA rules</li>
          </ul>

          <p>
            <strong>Attorneys&apos; Fees:</strong> Each party bears its own attorneys&apos; fees unless the arbitrator awards fees to the prevailing party as permitted by law.
          </p>

          <h3>18.5 Individual Arbitration Only (Class Action Waiver)</h3>

          <p>
            <strong>YOU AND FLUXVITA AGREE THAT DISPUTES WILL BE ARBITRATED ON AN INDIVIDUAL BASIS ONLY.</strong>
          </p>

          <p>
            <strong>Class Action Waiver:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>No class arbitrations, class actions, or representative actions are permitted</li>
            <li>The arbitrator may not consolidate claims of multiple parties</li>
            <li>You may not participate as a class member in any class action against Fluxvita</li>
          </ul>

          <p>
            If this class action waiver is found unenforceable, the entire arbitration provision in Section 18 will be void, and disputes will be resolved in court.
          </p>

          <h3>18.6 Exceptions to Arbitration</h3>

          <p>
            <strong>The following disputes are NOT subject to arbitration and may be brought in court:</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Small claims court matters if the claim qualifies and remains in that court</li>
            <li>Intellectual property disputes (trademarks, copyrights, patents, trade secrets)</li>
            <li>Injunctive or equitable relief to prevent actual or threatened infringement or misappropriation of intellectual property or confidential information</li>
          </ol>

          <h3>18.7 Opt-Out Right (30 Days)</h3>

          <p>
            <strong>You have the right to opt out of this arbitration agreement within 30 days of first accepting these Terms.</strong>
          </p>

          <p>
            <strong>To opt out:</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>Send an email to support@fluxvita.com</li>
            <li>Use the subject "Arbitration Opt-Out"</li>
            <li>Include your full name, email address, and statement: "I opt out of the arbitration provision in the Terms and Conditions"</li>
            <li>Ensure the email is received within 30 days of your first use of the Services or acceptance of these Terms</li>
          </ol>

          <p>
            <strong>If you opt out:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>This arbitration provision will not apply to you</li>
            <li>Disputes will be resolved in court (see Section 19)</li>
            <li>All other Terms remain in effect</li>
          </ul>

          <h3>18.8 Changes to This Section</h3>

          <p>
            We will provide 60 days&apos; advance notice of material changes to this dispute resolution section. Changes will not apply to disputes that arose before the effective date of the change. You may reject changes by opting out within 30 days of the notice using the opt-out procedure above.
          </p>

          <h3>18.9 Survival</h3>

          <p>
            This dispute resolution provision survives termination of these Terms and your use of the Services.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="governing-law"
        >
          <h2>19. Governing Law</h2>

          <h3>19.1 Applicable Law</h3>

          <p>
            These Terms and any disputes arising out of or relating to these Terms or the Services shall be governed by and construed in accordance with the laws of the State of Delaware, United States, and the Federal Arbitration Act (FAA), 9 U.S.C. Sections 1-16 for arbitration-related matters, without regard to its conflict of law principles.
          </p>

          <h3>19.2 Jurisdiction and Venue (If Arbitration Does Not Apply)</h3>

          <p>
            <strong>If a dispute is not subject to arbitration (e.g., you opted out, or an exception applies), you agree that:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>Exclusive jurisdiction lies with federal or state courts located in Dover, Delaware</li>
            <li>You consent to venue in Dover, Delaware</li>
            <li>You waive any objections to jurisdiction or venue in those courts</li>
          </ul>

          <h3>19.3 Waiver of Jury Trial</h3>

          <p>
            <strong>TO THE EXTENT PERMITTED BY LAW, YOU AND FLUXVITA WAIVE ANY RIGHT TO TRIAL BY JURY</strong> in any legal proceeding arising out of or relating to these Terms or the Services.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="general-provisions"
        >
          <h2>20. General Provisions</h2>

          <h3>20.1 Entire Agreement</h3>

          <p>
            These Terms, together with our Privacy Policy and any additional terms or policies referenced herein, constitute the entire agreement between you and Fluxvita regarding the Services and supersede all prior agreements, understandings, and communications.
          </p>

          <h3>20.2 Severability</h3>

          <p>
            If any provision of these Terms is held invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable, or if not possible, severed from these Terms.
          </p>

          <h3>20.3 Waiver</h3>

          <p>
            No waiver by Fluxvita of any term or condition in these Terms will be deemed a continuing waiver or a waiver of any other term or condition. Fluxvita&apos;s failure to enforce any right or provision will not constitute a waiver of that right or provision.
          </p>

          <h3>20.4 Assignment</h3>

          <p>
            <strong>You may not assign or transfer these Terms or your account without our prior written consent.</strong> Any attempted assignment in violation of this section is void.
          </p>

          <p>
            <strong>Fluxvita may assign these Terms and transfer any rights or obligations</strong> to any affiliate, subsidiary, or successor entity, or in connection with a merger, acquisition, reorganization, or sale of assets, without your consent.
          </p>

          <h3>20.5 No Third-Party Beneficiaries</h3>

          <p>
            These Terms do not create any third-party beneficiary rights except as expressly stated. No other person or entity has the right to enforce any provision of these Terms.
          </p>

          <h3>20.6 Force Majeure</h3>

          <p>
            Fluxvita is not liable for any failure or delay in performance due to causes beyond our reasonable control, including but not limited to:
          </p>

          <ul className="terms-of-use__list">
            <li>Acts of God, natural disasters, pandemics</li>
            <li>War, terrorism, civil unrest</li>
            <li>Government actions, legal restrictions</li>
            <li>Internet or telecommunications failures</li>
            <li>Cyber attacks, data breaches affecting third-party providers</li>
            <li>Labor disputes, strikes</li>
            <li>Failures of third-party service providers</li>
          </ul>

          <h3>20.7 Electronic Communications</h3>

          <p>
            By using the Services, you consent to receive communications from us electronically, including emails to the address you provided, in-app notifications and messages, and posting notices on the Website or App. You agree that electronic communications satisfy any legal requirement that communications be in writing.
          </p>

          <h3>20.8 Language</h3>

          <p>
            These Terms are written in English. Any translated versions are provided for convenience only. In the event of any conflict between the English version and a translated version, the English version prevails.
          </p>

          <h3>20.9 Headings</h3>

          <p>
            Section headings are for convenience only and do not affect the interpretation of these Terms.
          </p>

          <h3>20.10 Relationship of Parties</h3>

          <p>
            Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and Fluxvita. You have no authority to bind Fluxvita or make commitments on our behalf.
          </p>

          <h3>20.11 Export Control</h3>

          <p>
            The Services may be subject to U.S. export control laws. You agree to comply with all applicable export and import laws and regulations. You represent that you are not located in a country subject to U.S. embargo and are not listed on any U.S. government list of prohibited or restricted parties.
          </p>

          <h3>20.12 California Users</h3>

          <p>
            Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice:
          </p>

          <p>
            <strong>Complaint Assistance:</strong> The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
          </p>

          <h3>20.13 Mobile Application Terms</h3>

          <p>
            <strong>For iOS Users:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>These Terms are between you and Fluxvita, not Apple Inc.</li>
            <li>Apple has no obligation to provide maintenance or support</li>
            <li>Apple is not responsible for product liability claims, intellectual property infringement claims, or claims that the App fails to conform to legal requirements</li>
            <li>Apple is a third-party beneficiary of these Terms with the right to enforce them against you</li>
          </ul>

          <p>
            <strong>For Android Users:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>These Terms are between you and Fluxvita, not Google LLC</li>
            <li>Google has no obligations or liabilities related to the App</li>
            <li>Your use of the App is subject to Google Play&apos;s Terms of Service</li>
          </ul>

          <h3>20.14 Feedback</h3>

          <p>
            If you provide us with feedback, suggestions, or ideas about the Services ("Feedback"), you grant Fluxvita a perpetual, irrevocable, worldwide, royalty-free license to use, implement, and commercialize the Feedback without any obligation or compensation to you.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="contact-information"
        >
          <h2>21. Contact Information</h2>

          <p>
            If you have questions, concerns, or disputes regarding these Terms or the Services, please contact us:
          </p>

          <address className="terms-of-use__address">
            <span>Fluxvita Corporation</span>
            <span>Attn: Legal Department</span>
            <span>8 THE GREEN Ste R</span>
            <span>Dover, DE 19901</span>
            <span>United States</span>
            <a href="mailto:support@fluxvita.com">support@fluxvita.com</a>
            <a href="https://fluxvita.com" rel="noreferrer" target="_blank">
              https://fluxvita.com
            </a>
            <a href="https://jovida.ai" rel="noreferrer" target="_blank">
              https://jovida.ai
            </a>
          </address>

          <p>
            <strong>For Specific Inquiries:</strong>
          </p>

          <ul className="terms-of-use__list">
            <li>General questions: Include "General Inquiry" in subject line</li>
            <li>Dispute notices: Include "Dispute Notice" in subject line (see Section 18.1)</li>
            <li>Privacy rights: Include "Privacy Rights Request" in subject line</li>
            <li>Arbitration opt-out: Include "Arbitration Opt-Out" in subject line (see Section 18.7)</li>
          </ul>

          <p>
            <strong>Response Time:</strong> We will respond to inquiries within 10 business days.
          </p>
        </section>

        <section
          className="terms-of-use__section"
          id="acknowledgment"
        >
          <h2>Acknowledgment</h2>

          <p>
            <strong>BY USING THE SERVICES, YOU ACKNOWLEDGE THAT:</strong>
          </p>

          <ol className="terms-of-use__ordered-list">
            <li>You have read and understood these Terms and Conditions</li>
            <li>You agree to be bound by these Terms</li>
            <li>You meet the eligibility requirements (18 years or older)</li>
            <li>
              You understand the Services are not medical advice and should not replace professional healthcare
            </li>
            <li>
              You accept the disclaimers, limitations of liability, and dispute resolution provisions
            </li>
            <li>
              You consent to electronic communications and the use of your data as described in the Privacy Policy
            </li>
            <li>You have had the opportunity to consult with legal counsel if desired</li>
          </ol>

          <p>
            <strong>
              IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY STOP USING THE SERVICES AND DELETE YOUR ACCOUNT.
            </strong>
          </p>

          <p>
            <strong>End of Terms and Conditions</strong>
          </p>

          <p>
            These Terms and Conditions were drafted by legal counsel to protect Fluxvita Corporation&apos;s interests while providing fair and transparent terms to users. They comply with applicable U.S. federal and state laws, including consumer protection regulations, health information standards, and electronic commerce requirements.
          </p>

          <p>
            Document Version: 1.0
          </p>
          <p>
            Effective Date: Upon your acceptance and use of the Services
          </p>
          <p>
            Last Updated: October 30, 2025
          </p>

          <p>© 2025 Fluxvita Corporation. All rights reserved.</p>
        </section>
      </div>
    </div>
  );
};
