import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <style>
        {`
          .navbar {
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden;
            background: linear-gradient(90deg, #23272f 60%, #18181b 100%);
            color: #f3f4f6;
            padding: 18px 32px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 2px 12px rgba(0,0,0,0.13);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .navbar-logo {
            font-size: 1.6rem;
            font-weight: bold;
            color: #818cf8;
            letter-spacing: 1px;
            text-shadow: 0 2px 8px #6366f13a;
            text-decoration: none;
          }
          .navbar-links {
            display: flex;
            gap: 32px;
          }
          .navbar-link {
            color: #f3f4f6;
            text-decoration: none;
            font-size: 1.08rem;
            font-weight: 500;
            padding: 6px 0;
            border-bottom: 2px solid transparent;
            transition: color 0.18s, border 0.18s;
          }
          .navbar-link.active,
          .navbar-link:hover {
            color: #a5b4fc;
            border-bottom: 2px solid #6366f1;
          }
          .navbar-cart-btn {
            background: linear-gradient(90deg, #6366f1 60%, #818cf8 100%);
            color: #fff;
            border: none;
            border-radius: 9999px;
            padding: 8px 22px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            box-shadow: 0 2px 8px #6366f13a;
            transition: background 0.18s, box-shadow 0.18s;
            margin-left: 18px;
          }
          .navbar-cart-btn:hover {
            background: linear-gradient(90deg, #818cf8 60%, #6366f1 100%);
            box-shadow: 0 4px 18px #6366f13a;
          }
          @media (max-width: 600px) {
            .navbar {
              flex-direction: column;
              align-items: flex-start;
              padding: 14px 10px;
            }
            .navbar-links {
              gap: 18px;
              margin-top: 8px;
            }
            .navbar-cart-btn {
              margin-left: 0;
              margin-top: 10px;
            }
          }
        `}
      </style>
      <Link to="/" className="navbar-logo">Tint</Link>
      <div className="navbar-links">
        <Link
          to="/"
          className={`navbar-link${location.pathname === "/" ? " active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/shopnow"
          className={`navbar-link${location.pathname === "/shopnow" ? " active" : ""}`}
        >
          Shop
        </Link>
        <button
          className="navbar-cart-btn"
          onClick={() => navigate("/cart")}
        >
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
