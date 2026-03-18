import React from "react";
import { SEO } from "../../components/SEO";
import "./style.css";

export const SubscriptionGuide = () => {
  return (
    <div className="subscription-guide">
      <SEO
        title="Jovida Subscription Guide"
        description="Jovida subscription plans, credits policy, plan changes, and billing FAQ."
      />

      <div className="subscription-guide__wrapper">
        <header className="subscription-guide__header">
          <div>
            <h1 className="subscription-guide__title">Jovida Subscription Guide</h1>

            <p className="subscription-guide__subtitle">Fluxvita Corporation - jovida</p>

            <p className="subscription-guide__updated">
              Effective Date: March 18, 2026
              <br />
              Last Updated: March 18, 2026
            </p>
          </div>
        </header>

        <section className="subscription-guide__section" id="table-of-contents">
          <h2>Table of Contents</h2>

          <ol className="subscription-guide__toc">
            <li>
              <a href="#plans-and-credits">Plans &amp; Credits</a>
            </li>
            <li>
              <a href="#credits-policy">Credits Policy</a>
            </li>
            <li>
              <a href="#credits-consumption-order">Credits Consumption Order</a>
            </li>
            <li>
              <a href="#plan-change-rules">Plan Change Rules</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </section>

        <section className="subscription-guide__section" id="plans-and-credits">
          <h2>1. Plans &amp; Credits</h2>

          <p>
            Jovida offers three subscription plans: Standard, Pro, and Max. Each plan is
            available on a monthly or annual basis. Annual plans are offered at a discounted
            rate. Please refer to the in-app pricing page for current prices.
          </p>

          <p>
            The amount of credits issued per month varies by plan. Higher-tier plans receive
            more credits. The monthly credit allowance is the same whether you are on a
            monthly or annual plan.
          </p>
        </section>

        <section className="subscription-guide__section" id="credits-policy">
          <h2>2. Credits Policy</h2>

          <ul className="subscription-guide__list">
            <li>
              Subscription credits are automatically issued on your billing date each month.
              Any unused credits do not roll over and will expire at the end of the billing
              cycle.
            </li>
            <li>
              Credits cannot be redeemed for cash, transferred to another account, or
              withdrawn.
            </li>
            <li>
              Upon upgrading, new credits are issued immediately and any remaining credits
              from the previous plan are forfeited.
            </li>
            <li>
              Upon downgrading, your current credits remain unchanged for the remainder of
              the billing cycle. New credit amounts take effect from the next cycle.
            </li>
          </ul>
        </section>

        <section
          className="subscription-guide__section"
          id="credits-consumption-order"
        >
          <h2>3. Credits Consumption Order</h2>

          <p>
            Credits are consumed in order of expiration date, with the soonest-to-expire
            credits used first.
          </p>

          <p>
            Default order: daily check-in credits -&gt; subscription credits.
          </p>
        </section>

        <section className="subscription-guide__section" id="plan-change-rules">
          <h2>4. Plan Change Rules</h2>

          <h3>Upgrade (lower -&gt; higher tier, or monthly -&gt; annual)</h3>

          <ul className="subscription-guide__list">
            <li>
              Takes effect immediately. New credits are issued on the same day; remaining
              credits from the previous plan are forfeited.
            </li>
            <li>
              Apple automatically calculates and applies a prorated refund for the unused
              portion of your previous plan toward the new subscription. Your next billing
              date will follow the new subscription cycle.
            </li>
          </ul>

          <h3>Downgrade (higher -&gt; lower tier, or annual -&gt; monthly)</h3>

          <ul className="subscription-guide__list">
            <li>
              Takes effect at the start of the next billing cycle. Your current plan&apos;s
              benefits and credits remain active until the end of the current period.
            </li>
            <li>No refunds are issued.</li>
          </ul>
        </section>

        <section className="subscription-guide__section" id="faq">
          <h2>5. FAQ</h2>

          <div className="subscription-guide__faq-item">
            <h3>Q: What should I do if I run out of credits?</h3>
            <p>
              Your credits automatically refresh the next day. You can also upgrade your plan
              to receive a larger monthly credit allowance immediately.
            </p>
          </div>

          <div className="subscription-guide__faq-item">
            <h3>Q: Will my credits change if I switch from monthly to annual billing?</h3>
            <p>
              No. The monthly credit allowance remains the same. The switch takes effect
              immediately, and Apple will apply a prorated refund for the unused portion of
              your current monthly subscription.
            </p>
          </div>

          <div className="subscription-guide__faq-item">
            <h3>Q: When will my credits decrease after a downgrade?</h3>
            <p>
              Your current plan remains active until the end of the billing cycle. Credits
              will only change when the new plan takes effect in the next cycle.
            </p>
          </div>

          <div className="subscription-guide__faq-item">
            <h3>Q: How is the charge calculated when I upgrade?</h3>
            <p>
              Apple automatically calculates the remaining value of your current subscription
              and applies it as a credit toward the new plan. No manual action is required.
            </p>
          </div>

          <div className="subscription-guide__faq-item">
            <h3>Q: Can I still use my credits after canceling my subscription?</h3>
            <p>
              Yes. Your credits remain available until the end of the current billing cycle.
              Once the cycle ends, all subscription credits will be cleared.
            </p>
          </div>

          <div className="subscription-guide__faq-item">
            <h3>Q: Will my credits still be available after my subscription expires?</h3>
            <p>
              No. If your subscription is not renewed, all subscription credits in your
              account will be cleared upon expiration.
            </p>
          </div>

          <div className="subscription-guide__faq-item">
            <h3>Q: How is the billing period calculated for an annual subscription?</h3>
            <p>
              The annual cycle begins on your subscription date. Credits are issued on the
              same date each month and are valid until the next monthly billing date within
              the annual period.
            </p>
          </div>
        </section>

        <section className="subscription-guide__section" id="contact">
          <h2>6. Contact</h2>

          <p>
            For any questions regarding credits or your subscription, please contact us
            through the in-app feedback channel.
          </p>
        </section>
      </div>
    </div>
  );
};