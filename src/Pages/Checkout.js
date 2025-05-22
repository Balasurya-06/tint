import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Checkout = () => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [payment, setPayment] = useState("cod");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    holder: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payment === "card") {
      // Basic card validation
      if (
        !card.number ||
        !card.expiry ||
        !card.cvv ||
        !card.holder ||
        card.number.length < 12 ||
        card.cvv.length < 3
      ) {
        alert("Please fill all card details correctly.");
        return;
      }
    }
    setSubmitted(true);
    // Here you would send the order to your backend
  };

  return (
    <div className="checkout-page">
      <Navbar />
      <style>
        {`
          .checkout-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #18181b 0%, #23272f 100%);
            color: #f3f4f6;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 60px 0;
          }
          .checkout-container {
            background: #23272f;
            max-width: 500px;
            margin: 0 auto;
            border-radius: 18px;
            box-shadow: 0 6px 32px rgba(0,0,0,0.22);
            padding: 40px 32px 32px 32px;
          }
          .checkout-title {
            font-size: 2.2rem;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
            color: #a5b4fc;
            letter-spacing: 1px;
          }
          .checkout-form label {
            display: block;
            margin-bottom: 12px;
            font-weight: 500;
            color: #cbd5e1;
          }
          .checkout-form input,
          .checkout-form select {
            width: 100%;
            padding: 12px 14px;
            border-radius: 8px;
            border: 1.5px solid #374151;
            background: #18181b;
            color: #f3f4f6;
            font-size: 1rem;
            margin-bottom: 20px;
            outline: none;
            transition: border 0.2s;
          }
          .checkout-form input:focus,
          .checkout-form select:focus {
            border: 2px solid #6366f1;
          }
          .checkout-form .section-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin: 22px 0 12px 0;
            color: #818cf8;
            letter-spacing: 0.5px;
          }
          .payment-methods {
            display: flex;
            gap: 24px;
            margin-bottom: 18px;
          }
          .payment-radio {
            display: flex;
            align-items: center;
            gap: 7px;
            background: #18181b;
            padding: 8px 16px;
            border-radius: 7px;
            border: 1.5px solid #374151;
            cursor: pointer;
            transition: border 0.18s;
          }
          .payment-radio.selected {
            border: 2px solid #6366f1;
            background: #23272f;
          }
          .card-fields {
            margin-top: 10px;
            background: #18181b;
            border-radius: 8px;
            padding: 18px 16px 10px 16px;
            box-shadow: 0 2px 8px #6366f13a;
            border: 1.5px solid #374151;
          }
          .card-fields input {
            margin-bottom: 14px;
          }
          .checkout-btn {
            width: 100%;
            padding: 15px 0;
            background: linear-gradient(90deg, #6366f1 60%, #818cf8 100%);
            color: #fff;
            border: none;
            border-radius: 9px;
            font-size: 1.15rem;
            font-weight: 700;
            cursor: pointer;
            margin-top: 16px;
            box-shadow: 0 2px 8px #6366f13a;
            transition: background 0.18s, box-shadow 0.18s;
            letter-spacing: 0.5px;
          }
          .checkout-btn:hover {
            background: linear-gradient(90deg, #818cf8 60%, #6366f1 100%);
          }
          .success-message {
            text-align: center;
            color: #22c55e;
            font-size: 1.25rem;
            margin-top: 36px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
        `}
      </style>
      <div className="checkout-container">
        <div className="checkout-title">Checkout</div>
        {submitted ? (
          <div className="success-message">
            <span style={{fontSize: "2.5rem"}}>🎉</span><br />
            Order placed successfully!<br />
            Thank you for shopping with us.
          </div>
        ) : (
          <form className="checkout-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="section-title">Shipping Address</div>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleAddressChange}
                required
                placeholder="Full Name"
              />
            </label>
            <label>
              Street Address
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                required
                placeholder="Street, Apartment, etc."
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                required
                placeholder="City"
              />
            </label>
            <label>
              State
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                required
                placeholder="State/Province"
              />
            </label>
            <label>
              ZIP/Postal Code
              <input
                type="text"
                name="zip"
                value={address.zip}
                onChange={handleAddressChange}
                required
                placeholder="ZIP/Postal Code"
              />
            </label>
            <label>
              Country
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleAddressChange}
                required
                placeholder="Country"
              />
            </label>
            <div className="section-title">Payment Method</div>
            <div className="payment-methods">
              <label className={`payment-radio${payment === "cod" ? " selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={handlePaymentChange}
                  style={{ accentColor: "#6366f1" }}
                />
                Cash on Delivery
              </label>
              <label className={`payment-radio${payment === "card" ? " selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === "card"}
                  onChange={handlePaymentChange}
                  style={{ accentColor: "#6366f1" }}
                />
                Credit/Debit Card
              </label>
            </div>
            {payment === "card" && (
              <div className="card-fields">
                <label>
                  Card Number
                  <input
                    type="text"
                    name="number"
                    value={card.number}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required={payment === "card"}
                    pattern="\d{12,19}"
                  />
                </label>
                <label>
                  Expiry Date
                  <input
                    type="text"
                    name="expiry"
                    value={card.expiry}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    required={payment === "card"}
                    pattern="\d{2}/\d{2}"
                  />
                </label>
                <label>
                  CVV
                  <input
                    type="password"
                    name="cvv"
                    value={card.cvv}
                    onChange={handleCardChange}
                    placeholder="CVV"
                    maxLength={4}
                    required={payment === "card"}
                    pattern="\d{3,4}"
                  />
                </label>
                <label>
                  Name on Card
                  <input
                    type="text"
                    name="holder"
                    value={card.holder}
                    onChange={handleCardChange}
                    placeholder="Cardholder Name"
                    required={payment === "card"}
                  />
                </label>
              </div>
            )}
            <button className="checkout-btn" type="submit">
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;
