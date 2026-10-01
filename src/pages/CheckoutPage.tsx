import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StoreLayout from "../components/StoreLayout";
import type { Product } from "../data/products";
import "./CheckoutPage.css";
import { useOrders } from "../context/OrderContext";

type CheckoutItem = Product & {
  quantity: number;
};

function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state?.item as CheckoutItem | undefined;

  // OrderContext-ல இருந்து placeOrder function
  const { placeOrder: createOrder } = useOrders();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  if (!item) {
    return (
      <StoreLayout>
        <main className="empty-state">
          <h1>No product selected</h1>

          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </main>
      </StoreLayout>
    );
  }

  const total = item.price * item.quantity;

  // Place Order function
  const handlePlaceOrder = () => {
    const payment =
      paymentMethod === "cod"
        ? "COD"
        : paymentMethod === "upi"
        ? "UPI"
        : "Card";

    createOrder([item], payment);

    navigate("/orders?placed=1");
  };

  return (
    <StoreLayout>
      <main className="checkout-page">
        <h1>Checkout</h1>

        {/* ================= DELIVERY ADDRESS ================= */}

        <section className="checkout-section">
          <div className="section-heading">
            <div className="section-icon">📍</div>

            <div>
              <h2>Delivery Address</h2>
              <p>Enter your delivery address</p>
            </div>
          </div>

          <div className="address-form">

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>

              <textarea
                placeholder="House No, Street, Area"
                rows={4}
              />
            </div>

            <div className="form-row three-columns">

              <div className="form-group">
                <label>City</label>

                <input
                  type="text"
                  placeholder="City"
                />
              </div>

              <div className="form-group">
                <label>State</label>

                <input
                  type="text"
                  placeholder="State"
                />
              </div>

              <div className="form-group">
                <label>Pincode</label>

                <input
                  type="text"
                  placeholder="Pincode"
                />
              </div>

            </div>

          </div>
        </section>

        {/* ================= ORDER SUMMARY ================= */}

        <section className="checkout-section">
          <h2>Order Summary</h2>

          <div className="checkout-product">
            <img
              src={item.image}
              alt={item.title}
            />

            <div>
              <h3>{item.title}</h3>

              <p>
                Quantity: {item.quantity}
              </p>

              <strong>
                ₹{item.price}
              </strong>
            </div>
          </div>

          <div className="price-summary">

            <p>
              Product Price
              <span>₹{total}</span>
            </p>

            <p>
              Delivery
              <span>FREE</span>
            </p>

            <hr />

            <h3>
              Total Amount
              <span>₹{total}</span>
            </h3>

          </div>
        </section>

        {/* ================= PAYMENT METHOD ================= */}

        <section className="checkout-section">
          <h2>Payment Method</h2>

          {/* COD */}
          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <div>
              <strong>Cash on Delivery</strong>

              <p>
                Pay when your order is delivered
              </p>
            </div>

          </label>

          {/* UPI */}
          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <div>
              <strong>UPI</strong>

              <p>
                Pay using Google Pay, PhonePe or other UPI apps
              </p>
            </div>

          </label>

          {/* CARD */}
          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <div>
              <strong>Credit / Debit Card</strong>

              <p>
                Pay securely using your card
              </p>
            </div>

          </label>

        </section>

        {/* ================= PLACE ORDER BUTTON ================= */}

        <button
          className="primary-button checkout-button"
          onClick={handlePlaceOrder}
        >
          Place Order · ₹{total}
        </button>

      </main>
    </StoreLayout>
  );
}

export default CheckoutPage;