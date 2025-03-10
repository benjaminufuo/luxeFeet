import React, { useState } from "react";
import "./checkout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CheckoutStepper = ({ currentStep }) => {
  const steps = [
    { number: "01", title: "SHOPPING CART" },
    { number: "02", title: "CHECKOUT" },
    { number: "03", title: "ORDER COMPLETE" },
  ];

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`step ${currentStep >= index + 1 ? "active" : ""}`}>
            <article className="step-number">{step.number}</article>
            <article className="step-title">{step.title}</article>
          </div>
          {index < steps.length - 1 && <div className="step-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

const BillingForm = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  return (
    <div className="container">
      <div className="layout">
        <div className="details">
          <h1 className="">Billing Details</h1>
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="country">Select Country</label>
              <select id="country" className="form-select">
                <option value="">Select country</option>
                <option value="al">Alaska</option>
                <option value="ch">China</option>
                <option value="ja">Japan</option>
                <option value="ko">Korea</option>
                <option value="ph">Philippines</option>
              </select>
            </div>
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="form-input"
                    placeholder="Your firsttname"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="form-input"
                    placeholder="Your lastname"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  className="form-input"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  className="form-input"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address2">Second Address</label>
                <input
                  type="text"
                  id="address2"
                  className="form-input"
                  placeholder="Apartment, suite, unit"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Town/City</label>
                <input
                  type="text"
                  id="city"
                  className="form-input"
                  placeholder="Town or City"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="state">State/Province</label>
                  <input
                    type="text"
                    id="state"
                    className="form-input"
                    placeholder="State Province"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip/Postal Code</label>
                  <input
                    type="text"
                    id="zip"
                    className="form-input"
                    placeholder="Zip / Postal"
                  />
                </div>
              </div>
              <div className="form-row">
                <article className="form-group">
                  <label htmlFor="email">E-mail Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Your@email.com"
                  />
                </article>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="checkbox-group">
                  <input
                    type="radio"
                    id="create-account"
                    checked={createAccount}
                    onChange={(e) => setCreateAccount(e.target.checked)}
                  />
                  <label htmlFor="create-account">Create an Account?</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="radio"
                    id="ship-different"
                    checked={shipToDifferentAddress}
                    onChange={(e) =>
                      setShipToDifferentAddress(e.target.checked)
                    }
                  />
                  <label htmlFor="shipdifferent">
                    Ship to Different address
                  </label>
                </div>
              </div>
            </>
            <div className="Cart Summary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartTotal = () => {
  return (
    <div className="cart-total">
      <h2>Cart Total</h2>
      <p>
        Subtotal <span>$100.00</span>
      </p>
      <p>
        1 x Product Name <span>$99.00</span>
      </p>
      <p>
        1 x Product Name <span>$78.00</span>
      </p>
      <p>
        Shipping<span>$0.00</span>
      </p>
      <p className="order-total">
        Order Total<span>$180.00</span>
      </p>
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <>
      <div className="payment-method">
        <h2>Payment Methiod</h2>
        <label>
          <input type="radio" name="payment" /> Direct Bank Transfer
        </label>
        <label>
          <input type="radio" name="payment" /> Check Payment
        </label>
        <label>
          <input type="radio" name="payment" /> PayPal
        </label>
        <label>
          <input type="checkbox" name="payment" /> I have read and accepted the
          terms and conditions
        </label>
      </div>
      <div className="button-con">
        <button className="button2">Place an Order</button>
      </div>
    </>
  );
};

const Checkout = () => {
  return (
    <div className="wrapper">
      <Header />
      <CheckoutStepper currentStep={2} />
      <div className="checkout-content">
        <div className="billing-section">
          <BillingForm />
        </div>

        <div className="summary-section">
          <CartTotal />
          <PaymentMethod />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
