import React from "react";
import "./style.css";

export const TermsOfUse = () => {
  return (
    <div className="terms-of-use">
      <div className="terms-of-use__wrapper">
        <header className="terms-of-use__header">
          <span
            aria-hidden="true"
            className="terms-of-use__icon"
            role="img"
          >
            📄
          </span>

          <div>
            <h1 className="terms-of-use__title">Terms of Use</h1>

            <p className="terms-of-use__updated">
              Please note that these Terms of Use were last revised on October
              21, 2025.
            </p>
          </div>
        </header>

        <section className="terms-of-use__section">
          <p>
            These Terms of Use (&quot;Terms&quot;) constitute a legally binding
            agreement between you (&quot;you&quot;, &quot;your&quot;, or
            &quot;User&quot;) and FluxVita Corporation (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;) regarding your access to and use of
            the mobile application Jovida (&quot;App&quot;) and any associated
            websites, services, features or content (collectively, the
            &quot;Service&quot;).
          </p>

          <p>
            By downloading, installing or using the App, you accept and agree to
            these Terms. If you do not agree, you must not download or use the
            App.
          </p>
        </section>

        <section className="terms-of-use__section">
          <h2>1. Definitions</h2>
          <ul className="terms-of-use__list">
            <li>
              <span>Service:</span> the App, any related websites, and any
              features, functionalities or content provided by us or via the
              App.
            </li>
            <li>
              <span>User Content:</span> any text, audio, video, health logs,
              comments, profile information, or other materials that you submit
              or post via the App.
            </li>
            <li>
              <span>Health Tasks:</span> structured activities, prompts,
              reminders or interactive modules that support your wellness
              journey in the App.
            </li>
            <li>
              <span>AI Features:</span> conversational, voice-based or
              text-based artificial intelligence interactions, chat companion
              functionality, health suggestions or personalized coaching
              provided by or through the App.
            </li>
            <li>
              <span>Account:</span> the user registration profile you create in
              order to access Service features.
            </li>
          </ul>
        </section>

        <section className="terms-of-use__section">
          <h2>2. Eligibility &amp; User Obligations</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              You represent and warrant that you are at least 18 years of age
              (or of the age of majority in your jurisdiction) and that you have
              legal capacity to enter into this agreement.
            </li>
            <li>
              If you are using the Service on behalf of an organization or
              through an employer, you represent that you are authorized to bind
              that entity.
            </li>
            <li>
              You agree to maintain accurate, current and complete registration
              information for your Account and promptly update it as needed.
            </li>
            <li>
              You are solely responsible for any activity carried out via your
              Account, including any breaches of these Terms.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>3. License &amp; Access</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              Subject to your compliance with these Terms, we grant you a
              non-exclusive, non-transferable, revocable license to access and
              use the Service for your personal, non-commercial use.
            </li>
            <li>We reserve all rights not expressly granted herein.</li>
            <li>
              You must not:
              <ul>
                <li>
                  reverse-engineer, decompile, or attempt to derive source code
                  of the App;
                </li>
                <li>
                  use the Service in any unlawful manner or in violation of
                  third-party rights;
                </li>
                <li>
                  remove or modify any proprietary notices or labels in the
                  Service;
                </li>
                <li>
                  use the Service for commercial time-sharing, rental or
                  hosting;
                </li>
                <li>
                  interfere with the operation of the Service or impair other
                  users&rsquo; access.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>4. User Content &amp; Health Data</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              You retain ownership of any User Content you submit to the
              Service. By submitting User Content you grant us a worldwide,
              royalty-free, sublicensable, transferable license to use,
              reproduce, distribute, prepare derivative works, display and
              perform such content in connection with operating the Service.
            </li>
            <li>
              The App may collect and analyse health, wellness and activity data
              (for example, logs of workouts, mood entries, sleep or step count,
              heart rate from devices) and AI interaction transcripts. You
              consent to such collection upon using the related features.
            </li>
            <li>
              You must not submit User Content (or health data) that violates
              any laws, third-party rights, is defamatory, obscene, or infringes
              intellectual property.
            </li>
            <li>
              If you believe your data is inaccurate, you may request correction
              or deletion as set out in our Privacy Policy.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>5. Payments &amp; Subscriptions</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              If the Service offers paid features (subscription or in-App
              purchases), you agree to pay all applicable fees.
            </li>
            <li>
              Payment terms, renewal, cancellation and refund policies will be
              described in the App and/or in the App Store interface.
            </li>
            <li>
              We may change pricing or features from time to time; any changes
              will apply only to new subscription terms unless otherwise stated.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>6. Acceptable Use &amp; Prohibited Conduct</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms.
            </li>
            <li>
              You must not:
              <ul>
                <li>
                  use the Service if you are located in a jurisdiction where
                  provision of the Service is prohibited;
                </li>
                <li>
                  impersonate any person or entity or misrepresent your
                  affiliation;
                </li>
                <li>
                  submit or transmit viruses, malware or other harmful code;
                </li>
                <li>
                  interfere with the security or integrity of the Service;
                </li>
                <li>
                  use automated means (bots, spiders, scraping) to access or
                  monitor the Service;
                </li>
                <li>
                  collect or harvest any personal information of other users;
                </li>
                <li>
                  attempt to circumvent age, usage, geographic or other
                  restrictions;
                </li>
                <li>
                  use the Service for medical diagnosis or treatment without
                  consulting a qualified professional (see Section 8).
                </li>
              </ul>
            </li>
            <li>
              You agree we may suspend or terminate your access if we reasonably
              believe you have breached these Terms or engaged in prohibited
              conduct.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>7. Intellectual Property</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              The Service and all content, features and functionality (including
              software, design, text, graphics, logos, trademarks) are owned by
              us or our licensors and are protected by copyright, trademark and
              other laws.
            </li>
            <li>
              Nothing in these Terms grants you any right, title or interest in
              our intellectual property except for the license granted in
              Section 3.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>8. Medical &amp; Wellness Disclaimer</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              The Service is intended to support wellness, motivation and
              healthy habits; it is not a substitute for professional medical
              advice, diagnosis or treatment.
            </li>
            <li>
              Always seek the advice of a qualified health provider with any
              questions regarding diagnosis or treatment of any medical
              condition. Never disregard professional medical advice or delay
              seeking it because of something you read or do in the Service.
            </li>
            <li>
              We make no warranties regarding the accuracy, completeness or
              usefulness of any information provided through the Service.
            </li>
            <li>
              Your health, fitness and wellness outcomes may vary; we are not
              liable for any injury, loss or damage you may incur as a result of
              using the Service.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>9. Limitation of Liability &amp; Indemnity</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              To the maximum extent permitted by law, in no event shall we (or
              our officers, directors, employees, agents or affiliates) be liable
              for any indirect, incidental, special, consequential or punitive
              damages arising out of or in connection with your use of (or
              inability to use) the Service.
            </li>
            <li>
              Our total aggregate liability for all claims arising under or
              relating to these Terms shall not exceed the amount you paid us in
              the prior twelve (12) months (if any) or USD $100, whichever is
              greater.
            </li>
            <li>
              You agree to indemnify, defend and hold us harmless from and
              against any claims, liabilities, losses or expenses (including
              reasonable attorneys&rsquo; fees) arising out of your breach of
              these Terms or your negligent or wrongful use of the Service.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>10. Termination &amp; Suspension</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              We may suspend or terminate your access to the Service at any time
              for any reason, including if we believe you violated these Terms
              or the law.
            </li>
            <li>
              On termination: your right to use the Service will end
              immediately. Sections 4, 7, 8, 9, 10, 11, 12, 13 and 14 will
              survive.
            </li>
            <li>
              If you terminate your Account, your data will be handled according
              to our Privacy Policy.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>11. Governing Law &amp; Dispute Resolution</h2>
          <ol className="terms-of-use__ordered-list">
            <li>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, United States, without regard
              to its conflict of law provisions.
            </li>
            <li>
              If any dispute arises, you agree to first attempt informal
              resolution by contacting us at the address below. If unresolved
              within thirty (30) days, the dispute will be finally settled by
              binding arbitration under the rules of the American Arbitration
              Association (AAA) then in effect. The arbitration will be
              conducted in Dover, Delaware. You and we each waive the right
              to a jury trial or class action.
            </li>
            <li>
              Notwithstanding the above, we may seek injunctive relief in any
              court of competent jurisdiction to protect our intellectual
              property rights or confidential information.
            </li>
          </ol>
        </section>

        <section className="terms-of-use__section">
          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. When we make material
            changes, we will notify you by posting the revised Terms within the
            App or on our website and indicate the &quot;Last Updated&quot;
            date. Your continued use of the Service after changes constitutes
            your acceptance of the revised Terms.
          </p>
        </section>

        <section className="terms-of-use__section">
          <h2>13. Severability &amp; Waiver</h2>
          <p>
            If any provision of these Terms is held invalid, illegal or
            unenforceable, the remaining provisions will remain in full force
            and effect. No waiver of any failure to enforce any provision will
            constitute a waiver of any future enforcement of that or any other
            provision.
          </p>
        </section>

        <section className="terms-of-use__section">
          <h2>14. Contact Information</h2>
          <p>
            If you have questions about these Terms or want to contact us, you
            may do so at:
          </p>

          <address className="terms-of-use__address">
            <span>FluxVita Corporation</span>
            <span>8 THE GREEN Ste R, DOVER, DE</span>
            <a href="mailto:support@fluxvita.com">support@fluxvita.com</a>
          </address>
        </section>
      </div>
    </div>
  );
};

