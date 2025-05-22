import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get cart items from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
      toast.success("Cart loaded!", { autoClose: 1200, hideProgressBar: true });
    }
  }, []);

  // Remove item from cart handler
  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter(item => item.product_id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.info("Product removed from cart.");
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <div className="cart-page">
      <ToastContainer />
      <style>
        {`
          .cart-page {
            padding: 60px 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #18181b 0%, #23272f 100%);
            min-height: 100vh;
            color: #f3f4f6;
          }
          .cart-heading {
            text-align: center;
            font-size: 2.3rem;
            font-weight: bold;
            margin-bottom: 36px;
            color: #f3f4f6;
            letter-spacing: 1px;
          }
          .cart-list {
            max-width: 800px;
            margin: 0 auto 32px auto;
            background: #23272f;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.18);
            border: 1px solid #30343c;
            padding: 24px;
          }
          .cart-item {
            display: flex;
            align-items: center;
            gap: 24px;
            border-bottom: 1px solid #30343c;
            padding: 18px 0;
          }
          .cart-item:last-child {
            border-bottom: none;
          }
          .cart-item img {
            width: 90px;
            height: 90px;
            object-fit: cover;
            border-radius: 8px;
            background: #18181b;
            border: 1px solid #30343c;
          }
          .cart-info {
            flex: 1;
          }
          .cart-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: #e0e7ef;
            margin-bottom: 6px;
          }
          .cart-price {
            color: #a5b4fc;
            font-size: 1rem;
            font-weight: 500;
          }
          .cart-total {
            text-align: right;
            font-size: 1.2rem;
            font-weight: bold;
            color: #a5b4fc;
            margin-top: 18px;
          }
          .empty-cart {
            text-align: center;
            color: #a1a1aa;
            font-size: 1.1rem;
            margin-top: 60px;
          }
          .remove-btn {
            background: #ef4444;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 7px 16px;
            font-size: 0.98rem;
            font-weight: 500;
            cursor: pointer;
            margin-left: 18px;
            transition: background 0.18s;
          }
          .remove-btn:hover {
            background: #dc2626;
          }
          .checkout-btn {
            margin-top: 24px;
            width: 100%;
            padding: 14px 0;
            background: linear-gradient(90deg, #6366f1 60%, #818cf8 100%);
            color: #fff;
            border: none;
            border-radius: 8px;
            font-size: 1.15rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 2px 8px #6366f13a;
            transition: background 0.18s, box-shadow 0.18s;
          }
        `}
      </style>
      <Navbar />
      <h1 className="cart-heading">Your Cart</h1>
      <div className="cart-list">
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty.</div>
        ) : (
          cartItems.map((item, idx) => (
            <div className="cart-item" key={item.product_id || idx}>
              <img
                src={
                  item.image && item.image.startsWith("http")
                    ? item.image
                    : `http://localhost:8000/${item.image ? item.image.replace(/^\/+/, "") : ""}`
                }
                alt={item.product_name}
              />
              <div className="cart-info">
                <div className="cart-name">{item.product_name}</div>
                <div className="cart-price">₹{item.amount}</div>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.product_id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <>
            <div className="cart-total">Total: ₹{getTotal()}</div>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
