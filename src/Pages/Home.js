import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Navbar />
      <style>
        {`
          .home-page {
            background: linear-gradient(135deg, #18181b 0%, #23272f 100%);
            color: #f3f4f6;
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            overflow-x: hidden;
          }
          .cart-top-btn {
            position: absolute;
            top: 32px;
            right: 40px;
            z-index: 10;
            background: linear-gradient(90deg, #6366f1 60%, #818cf8 100%);
            color: #fff;
            padding: 10px 28px;
            border-radius: 9999px;
            font-size: 1.07rem;
            font-weight: 500;
            border: none;
            box-shadow: 0 2px 12px #6366f13a;
            cursor: pointer;
            transition: background 0.2s, box-shadow 0.2s, transform 0.18s;
            outline: none;
            letter-spacing: 0.5px;
          }
          .cart-top-btn:hover {
            background: linear-gradient(90deg, #818cf8 60%, #6366f1 100%);
            box-shadow: 0 4px 18px #6366f13a;
            transform: scale(1.05);
          }
          .hero-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 110px 20px 90px 20px;
            background: linear-gradient(120deg, #23272f 60%, #18181b 100%);
            border-radius: 0 0 40px 40px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
            position: relative;
            overflow: hidden;
            animation: fadeInDown 1.2s cubic-bezier(.39,.575,.56,1) both;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .hero-section::before {
            content: "";
            position: absolute;
            left: -80px;
            top: -80px;
            width: 220px;
            height: 220px;
            background: radial-gradient(circle, #818cf8 0%, #23272f 80%);
            opacity: 0.18;
            border-radius: 50%;
            z-index: 0;
          }
          .hero-section h1 {
            font-size: 3.3rem;
            font-weight: bold;
            margin-bottom: 1.1rem;
            letter-spacing: -1px;
            color: #f3f4f6;
            text-shadow: 0 2px 16px #18181b;
            z-index: 1;
            animation: fadeIn 1.2s 0.2s both;
          }
          .hero-section h1 span {
            color: #818cf8;
            text-shadow: 0 2px 12px #6366f1;
          }
          .hero-section p {
            font-size: 1.3rem;
            max-width: 650px;
            margin-bottom: 2.2rem;
            color: #cbd5e1;
            line-height: 1.6;
            z-index: 1;
            animation: fadeIn 1.2s 0.4s both;
          }
          .hero-section a {
            background: linear-gradient(90deg, #6366f1 60%, #818cf8 100%);
            color: white;
            padding: 16px 40px;
            border-radius: 9999px;
            font-size: 1.15rem;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.2s, box-shadow 0.2s, transform 0.18s;
            box-shadow: 0 2px 12px #6366f13a;
            letter-spacing: 0.5px;
            z-index: 1;
            animation: fadeIn 1.2s 0.6s both;
          }
          .hero-section a:hover {
            background: linear-gradient(90deg, #818cf8 60%, #6366f1 100%);
            box-shadow: 0 4px 18px #6366f13a;
            transform: scale(1.06);
          }
          @keyframes fadeIn {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          .features-section {
            padding: 80px 20px 70px 20px;
            text-align: center;
            background: transparent;
            animation: fadeIn 1.2s 0.8s both;
          }
          .features-section h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            color: #e0e7ef;
            letter-spacing: 0.5px;
          }
          .features-section .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            max-width: 950px;
            margin: 0 auto;
          }
          @media (min-width: 768px) {
            .features-section .features-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .feature-card {
            background: linear-gradient(135deg, #23272f 60%, #18181b 100%);
            border-radius: 22px;
            box-shadow: 0 4px 18px rgba(0,0,0,0.13);
            padding: 44px 26px 36px 26px;
            color: #f3f4f6;
            border: 1.5px solid #30343c; /* dark border */
            transition: transform 0.18s, box-shadow 0.18s;
            position: relative;
            overflow: hidden;
          }
          .feature-card:hover {
            transform: translateY(-8px) scale(1.04);
            box-shadow: 0 10px 36px #6366f13a;
            border-color: #6366f1;
          }
          .feature-card::before {
            content: "";
            position: absolute;
            right: -40px;
            top: -40px;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, #6366f1 0%, #23272f 80%);
            opacity: 0.13;
            border-radius: 50%;
            z-index: 0;
          }
          .features-section h3 {
            font-size: 1.28rem;
            font-weight: 600;
            margin-bottom: 0.7rem;
            color: #a5b4fc;
            letter-spacing: 0.3px;
            z-index: 1;
            position: relative;
          }
          .features-section p {
            color: #cbd5e1;
            font-size: 1.08rem;
            line-height: 1.6;
            z-index: 1;
            position: relative;
          }
          .footer {
            background: #18181b;
            color: #a5b4fc;
            padding: 44px 0 22px 0;
            margin-top: 0;
            border-top: 1.5px solid #23272f; /* dark border */
            box-shadow: 0 -2px 18px #23272f44;
            animation: fadeIn 1.2s 1.2s both;
          }
          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
            max-width: 900px;
            margin: 0 auto;
          }
          .footer-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }
          .footer-logo {
            font-size: 2.1rem;
            font-weight: 700;
            color: #818cf8;
            letter-spacing: 1px;
          }
          .footer-tagline {
            font-size: 1.09rem;
            color: #cbd5e1;
            font-weight: 400;
            letter-spacing: 0.5px;
          }
          .footer-socials {
            display: flex;
            gap: 22px;
            margin-top: 8px;
          }
          .footer-socials a {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #23272f;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            transition: background 0.18s, transform 0.18s;
          }
          .footer-socials a:hover {
            background: #6366f1;
            transform: scale(1.1);
          }
          .footer-bottom {
            text-align: center;
            margin-top: 18px;
            font-size: 1.04rem;
            color: #cbd5e1;
            letter-spacing: 0.5px;
          }
        `}
      </style>

      <button
        className="cart-top-btn"
        onClick={() => navigate("/cart")}
      >
        View Cart
      </button>

      <section className="hero-section">
        <h1>
          Welcome to <span>Tint</span>
        </h1>
        <p>
          Discover bold, comfortable, and sustainable fashion made for every shade of you.
        </p>
        <Link to="/shopnow">
          Shop Now
        </Link>
      </section>

      <section className="features-section">
        <h2>Why Choose Tint?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Eco-Friendly</h3>
            <p>Clothes made with love and sustainable materials. Reduce your footprint, look great doing it.</p>
          </div>
          <div className="feature-card">
            <h3>Bold Designs</h3>
            <p>Trendy and timeless collections with unique style. Stand out and express yourself every day.</p>
          </div>
          <div className="feature-card">
            <h3>Comfort Fit</h3>
            <p>All-day comfort without compromising on looks. Designed for every body, every occasion.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Tint</span>
            <span className="footer-tagline">Wear Your Shade</span>
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" fill="#a5b4fc" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.03c.48.48.85 1.07 1.03 1.77.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.03 1.77c-.48.48-1.07.85-1.77 1.03-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.03c-.48-.48-.85-1.07-1.03-1.77-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12.2s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.03-1.77c.48-.48 1.07-.85 1.77-1.03.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.072 5.77.13 4.74.32 3.89.6a7.07 7.07 0 0 0-2.56 1.64A7.07 7.07 0 0 0 .6 3.89c-.28.85-.47 1.88-.53 3.16C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.282.25 2.312.53 3.162a7.07 7.07 0 0 0 1.64 2.56 7.07 7.07 0 0 0 2.56 1.64c.85.28 1.88.47 3.16.53C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.282-.058 2.312-.25 3.162-.53a7.07 7.07 0 0 0 2.56-1.64 7.07 7.07 0 0 0 1.64-2.56c.28-.85.47-1.88.53-3.16.059-1.28.072-1.684.072-4.948 0-3.264-.013-3.668-.072-4.948-.058-1.282-.25-2.312-.53-3.162a7.07 7.07 0 0 0-1.64-2.56A7.07 7.07 0 0 0 20.11.6c-.85-.28-1.88-.47-3.16-.53C15.668.013 15.264 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="24" height="24" fill="#a5b4fc" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="mailto:support@tint.com" aria-label="Email">
              <svg width="24" height="24" fill="#a5b4fc" viewBox="0 0 24 24"><path d="M12 13.065L.8 6.2V18a2 2 0 0 0 2 2h18.4a2 2 0 0 0 2-2V6.2l-11.2 6.865zm10.4-9.065H1.6a2 2 0 0 0-1.6 2l11.2 6.865L22.4 6a2 2 0 0 0-1.6-2z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Tint. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
