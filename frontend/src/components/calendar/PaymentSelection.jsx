import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

export default function PaymentSelection({ bookingId }) {
  const [loading, setLoading] = useState(null);

  // STRIPE
  const payWithStripe = async () => {
    try {
      setLoading("stripe");

      const res = await axios.post(`${API}/api/stripe/checkout`, { bookingId });

      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
      alert("Stripe payment failed");
      setLoading(null);
    }
  };

  // PAYPAL
  const payWithPayPal = async () => {
    try {
      setLoading("paypal");

      const res = await axios.post(`${API}/api/paypal/create-order`, {
        bookingId,
      });

      window.location.href = res.data.approvalUrl;
    } catch (err) {
      console.error(err);
      alert("PayPal payment failed");
      setLoading(null);
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Payment</h2>

      <p>
        Your slot is <b>reserved for 1 hour</b>. Complete payment to confirm
        your booking.
      </p>

      <button onClick={payWithStripe} disabled={loading}>
        {loading === "stripe" ? "Redirecting..." : "Pay with Card"}
      </button>

      <button onClick={payWithPayPal} disabled={loading}>
        {loading === "paypal" ? "Redirecting..." : "Pay with PayPal"}
      </button>
    </div>
  );
}
