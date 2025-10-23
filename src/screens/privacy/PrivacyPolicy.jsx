import React from "react";
import "./style.css";

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__wrapper">
        <header className="privacy-policy__header">
          <span
            aria-hidden="true"
            className="privacy-policy__icon"
            role="img"
          >
            🔐
          </span>

          <div>
            <h1 className="privacy-policy__title">Privacy Policy</h1>

            <p className="privacy-policy__updated">
              Please note that the Privacy Policy was last revised on October 21, 2025
            </p>
          </div>
        </header>

        <section className="privacy-policy__section">
          <p>
            FluxVita Corporation (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our AI health companion app, Jovida
            (&quot;App&quot;), available via mobile application and related
            online services (&quot;Service&quot;).
          </p>

          <p>
            By using the Service, you agree to the terms of this Privacy Policy
            and our Terms of Use. If you do not agree, please discontinue use.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>1. Introduction &amp; Scope</h2>
          <p>
            This Policy applies to all users of the Jovida App and associated
            services. Some features (for example, AI health tasks or voice
            interaction) may be subject to supplemental terms. Not all features
            are available to all users or in all jurisdictions.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>2. Information We Collect</h2>

          <h3>2.1 Account &amp; Profile Information</h3>
          <ul>
            <li>
              Name, email address, password, and optional phone number or date
              of birth, if provided.
            </li>
            <li>
              Social login information (for example, Google or Facebook), if
              used.
            </li>
          </ul>

          <h3>2.2 Health &amp; Activity Data</h3>
          <ul>
            <li>
              Wellness entries you input, including mood logs, health goals, and
              completed tasks such as exercise or meditation.
            </li>
            <li>
              Data from connected devices including heart rate, step count,
              sleep patterns, or GPS location when enabled.
            </li>
            <li>Timestamps and activity types associated with your health tasks.</li>
          </ul>

          <h3>2.3 AI Interactions &amp; Voice Data</h3>
          <ul>
            <li>Chat transcripts and voice recordings generated in the App.</li>
            <li>
              These interactions may be shared with AI and speech recognition
              providers such as OpenAI, AWS, or Google for processing,
              improvement, and personalization.
            </li>
          </ul>

          <h3>2.4 Usage &amp; Device Data</h3>
          <ul>
            <li>
              Technical data such as device type, operating system, app version,
              IP address, or browser details where applicable.
            </li>
            <li>
              Usage analytics including features used, session duration, error
              logs, navigation patterns, and clicks.
            </li>
          </ul>

          <h3>2.5 Cookies &amp; Web Technologies</h3>
          <ul>
            <li>
              For web-based use, we employ cookies (session, analytics, and
              performance) and similar tools to enhance functionality and user
              experience.
            </li>
            <li>
              Analytics tools such as Google Analytics may collect information
              about site usage.
            </li>
          </ul>
        </section>

        <section className="privacy-policy__section">
          <h2>3. How We Use Your Data</h2>
          <ul className="privacy-policy__list">
            <li>
              <span>Provide &amp; Improve Service:</span> Operate the App,
              deliver personalized content, health reminders, and AI tasks.
            </li>
            <li>
              <span>AI Enhancement:</span> Improve AI models using anonymized
              transcripts.
            </li>
            <li>
              <span>Communications:</span> Send updates, security notices,
              progress reports, and optional marketing content.
            </li>
            <li>
              <span>Analytics &amp; Research:</span> Analyze usage in aggregated
              or de-identified form to enhance features.
            </li>
            <li>
              <span>Legal &amp; Safety Compliance:</span> Prevent fraud, enforce
              policies, and respond to legal obligations.
            </li>
          </ul>
        </section>

        <section className="privacy-policy__section">
          <h2>4. Data Disclosure &amp; Third-Party Services</h2>

          <h3>4.1 Service Providers</h3>
          <p>
            We work with vendors, including cloud hosts (for example, AWS),
            analytics (for example, Mixpanel or Google Analytics), push
            notification services (for example, Firebase or MobPush), and AI or
            speech services (for example, OpenAI, Google, or Amazon) under strict
            confidentiality and privacy standards.
          </p>

          <h3>4.2 Legal Obligations</h3>
          <p>
            We may disclose data to comply with legal duties or to protect our
            rights and safety.
          </p>

          <h3>4.3 Business Transfers</h3>
          <p>
            If FluxVita is involved in mergers or sales, user data may be
            transferred under confidentiality obligations.
          </p>

          <h3>4.4 Aggregated &amp; Anonymized Data</h3>
          <p>
            We may share aggregate or de-identified data for research and
            analytics.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>5. Data Security</h2>
          <p>
            We employ industry-standard security measures, including encryption,
            access controls, and secure storage, to protect your data. While no
            system is foolproof, if a breach occurs we will notify users and any
            required authorities.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>6. Third-Party SDKs &amp; Tools</h2>
          <p>We rely on third-party SDKs and services to support the App:</p>
          <ul className="privacy-policy__list">
            <li>
              <span>Push Notifications:</span> Firebase Cloud Messaging or
              MobPush.
            </li>
            <li>
              <span>Crash Reporting:</span> Sentry or similar tools.
            </li>
            <li>
              <span>Analytics:</span> Mixpanel and Google Analytics.
            </li>
            <li>
              <span>AI / Voice Processing:</span> OpenAI, Amazon AWS, or Google
              Speech-to-Text.
            </li>
          </ul>
          <p>
            Each provider maintains its own privacy practices. We assess these
            partners to ensure they meet our privacy standards.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>7. Data Retention &amp; Deletion</h2>
          <p>
            We retain personal data only as required to provide the Service,
            meet legal obligations, or protect rights. You may request deletion,
            correction, or export of your data via in-app controls or by
            contacting us. After account deletion we purge personal data unless
            otherwise required by law.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>8. Your Rights &amp; Choices</h2>
          <p>Depending on jurisdiction (for example, GDPR or CCPA), you may:</p>
          <ul>
            <li>Access, correct, or delete personal data.</li>
            <li>Export your data in a portable format.</li>
            <li>Object to or restrict processing.</li>
            <li>Withdraw consent for specific processing.</li>
            <li>Opt out of marketing and analytics tracking.</li>
          </ul>
          <p>
            Requests can be made via your account settings or by contacting
            privacy@fluxvita.com. See Section 14 for additional contact
            information.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>9. Minors &amp; Age Restrictions</h2>
          <p>
            Jovida is not intended for children under 13. We do not knowingly
            collect their data and will delete it if identified.
          </p>
          <p>
            For ages 13 through 16 we apply enhanced privacy by default, which
            includes no personalized advertising, voice recordings disabled, and
            stricter defaults unless parental consent is provided.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>10. International Transfers</h2>
          <p>
            Your information may be processed in the United States or other
            countries. We ensure such transfers comply with privacy laws (for
            example, GDPR) using contractual clauses or other recognized
            mechanisms.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>11. Privacy by Design &amp; Data Minimization</h2>
          <p>
            We follow privacy by design principles by incorporating privacy into
            product development, minimizing data collection, anonymizing data
            whenever possible, and regularly reviewing our practices.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>12. Links to Third-Party Services</h2>
          <p>
            Our App may link to other websites or services. We are not
            responsible for their privacy practices and encourage you to review
            their policies directly.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>13. Changes to This Policy</h2>
          <p>
            Material changes will be posted within the App and on our website at
            least seven days before taking effect. Continued use after changes
            indicates acceptance.
          </p>
        </section>

        <section className="privacy-policy__section">
          <h2>14. Contact Us</h2>
          <p>If you have questions or wish to exercise your data rights:</p>
          <address className="privacy-policy__address">
            <span>FluxVita Corporation</span>
            <span>8 THE GREEN Ste R, DOVER, DE</span>
            <a href="mailto:support@fluxvita.com">support@fluxvita.com</a>
          </address>
        </section>
      </div>
    </div>
  );
};
