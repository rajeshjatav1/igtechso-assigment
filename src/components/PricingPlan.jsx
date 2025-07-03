import React from "react";

const PricingPlan = () => {
  const [activeBtn, setActiveBtn] = React.useState("1");
  return (
    <section className="ig-pricing-plan-container">
      <section className=" content-width">
        <div className="ig-feature-txt">Pricing Plan</div>
        <div className="ig-feature-heading">
          <h2>Choose your pricing policy</h2>
        </div>
        <div className="ig-plan-tabs">
          <div
            onClick={() => setActiveBtn("1")}
            className={"ig-plan-btn" + (activeBtn === "1" ? " active" : "")}
          >
            Monthly Plan
          </div>
          <div
            onClick={() => setActiveBtn("2")}
            className={"ig-plan-btn" + (activeBtn === "2" ? " active" : "")}
          >
            Annual Plan
          </div>
        </div>
        <div className="ig-plan-box-container">
          <div className="ig-plan-box">
            <h2 className="ig-plan-name">Free Plan</h2>
            <p>For Small teams or office</p>
            <div className="ig-plan-benefits">
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Ultimate access to all course, exercises and assessments
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Free acess for all kind of exercise corrections with
                  downloads.
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Total assessment corrections with free download access system
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/unchecked-tick.png" alt="check-icon" />
                <span>
                  Unlimited download of courses on the mobile app contents
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/unchecked-tick.png" alt="check-icon" />
                <span>Download and print courses and exercises in PDF</span>
              </p>
            </div>
            <div className="ig-header-free-txt">Start free trail</div>
          </div>
          <div className="ig-plan-box active">
            <div className="ig-price-container">
              <div>
                <h2 className="ig-plan-name">Premium</h2>
                <p>For startup enterprise</p>
              </div>
              <div className="ig-price">
                <span>Starting from</span>
                <h2>49.99/mo</h2>
              </div>
            </div>
            <div className="ig-plan-benefits">
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Ultimate access to all course, exercises and assessments
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Free acess for all kind of exercise corrections with
                  downloads.
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Total assessment corrections with free download access system
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>
                  Unlimited download of courses on the mobile app contents
                </span>
              </p>
              <p className="ig-plan-benefit">
                <img src="/checked-tick.png" alt="check-icon" />
                <span>Download and print courses and exercises in PDF</span>
              </p>
            </div>
            <div className="ig-header-free-txt">Subscribe Now</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PricingPlan;
