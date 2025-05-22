import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopNow = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(() => {
        setProducts([]);
        setFilteredProducts([]);
      });
  }, []);

  useEffect(() => {
    let filtered = products;
    if (minPrice !== "") {
      filtered = filtered.filter((p) => Number(p.amount) >= Number(minPrice));
    }
    if (maxPrice !== "") {
      filtered = filtered.filter((p) => Number(p.amount) <= Number(maxPrice));
    }
    if (gender !== "") {
      filtered = filtered.filter(
        (p) => p.gender && p.gender.toLowerCase() === gender
      );
    }
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, gender, products]);

  // Add to Cart handler
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Check if already in cart (by product_id)
    const exists = cart.find((item) => item.product_id === product.product_id);
    if (!exists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Added to cart!");
    } else {
      toast.info("Product already in cart.");
    }
  };

  // Buy Now handler
  const handleBuyNow = (product) => {
    handleAddToCart(product);
    window.location.href = "/cart";
  };

  return (
    <div className="shop-page">
      <ToastContainer />
      <style>
        {`
          .shop-page {
            padding: 60px 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #18181b 0%, #23272f 100%);
            min-height: 100vh;
            color: #f3f4f6;
          }
          .filter-bar {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px;
            margin-bottom: 32px;
            background: #23272f;
            padding: 18px 28px;
            border-radius: 14px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.18);
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid #30343c; /* dark border */
          }
          .filter-bar label {
            font-weight: 500;
            margin-right: 8px;
            color: #cbd5e1;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .filter-bar input,
          .filter-bar select {
            padding: 7px 12px;
            border-radius: 6px;
            border: 1px solid #374151;
            font-size: 1rem;
            outline: none;
            background: #18181b;
            color: #f3f4f6;
            transition: border 0.2s;
          }
          .filter-bar input:focus,
          .filter-bar select:focus {
            border: 1.5px solid #6366f1;
          }
          .shop-heading {
            text-align: center;
            font-size: 2.7rem;
            font-weight: bold;
            margin-bottom: 44px;
            color: #f3f4f6;
            letter-spacing: 1px;
            text-shadow: 0 2px 12px #18181b;
          }
          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 36px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .product-card {
            background: linear-gradient(135deg, #23272f 60%, #18181b 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 6px 24px rgba(0,0,0,0.22);
            transition: transform 0.25s, box-shadow 0.25s;
            border: 1.5px solid #30343c; /* dark border */
            display: flex;
            flex-direction: column;
          }
          .product-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 10px 32px rgba(99,102,241,0.15);
            border-color: #6366f1;
          }
          .product-card img {
            width: 100%;
            height: 320px;
            object-fit: cover;
            background: #18181b;
            border-bottom: 1px solid #30343c; /* dark border */
          }
          .product-info {
            padding: 20px 16px 18px 16px;
            text-align: center;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .product-name {
            font-size: 1.22rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #e0e7ef;
            letter-spacing: 0.5px;
          }
          .product-price {
            font-size: 1.08rem;
            color: #a5b4fc;
            font-weight: 500;
            margin-bottom: 4px;
          }
          .product-actions {
            display: flex;
            justify-content: center;
            gap: 14px;
            margin-top: 10px;
          }
          .cart-btn, .buy-btn {
            padding: 8px 18px;
            border-radius: 6px;
            border: none;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.18s, color 0.18s, box-shadow 0.18s;
            outline: none;
          }
          .cart-btn {
            background: #23272f;
            color: #a5b4fc;
            border: 1.5px solid #6366f1;
          }
          .cart-btn:hover {
            background: #6366f1;
            color: #fff;
            box-shadow: 0 2px 8px #6366f13a;
          }
          .buy-btn {
            background: linear-gradient(90deg, #6366f1 60%, #818cf8 100%);
            color: #fff;
            border: none;
            box-shadow: 0 2px 8px #6366f13a;
          }
          .buy-btn:hover {
            background: linear-gradient(90deg, #818cf8 60%, #6366f1 100%);
            color: #fff;
          }
        `}
      </style>

      <Navbar />

      <h1 className="shop-heading">Shop Now</h1>
      <div className="filter-bar">
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            min="0"
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="₹ Min"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            min="0"
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="₹ Max"
          />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </label>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.product_id}>
            <img
              src={
                product.image.startsWith("http")
                  ? product.image
                    : `http://localhost:8000/${product.image.replace(/^\/+/, "")}`
              }
              alt={product.product_name}
            />
            <div className="product-info">
              <div className="product-name">{product.product_name}</div>
              <div className="product-price">₹{product.amount}</div>
              <div className="product-actions">
                <button
                  className="cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="buy-btn"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
