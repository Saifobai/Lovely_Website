import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/payment";

export default function PaymentSelection({ bookingId }) {
  const [loading, setLoading] = useState(null);

  const pay = async (provider) => {
    try {
      setLoading(provider);

      const res = await axios.post(`${API}/init`, {
        bookingId,
        provider,
      });

      if (!res.data.paymentUrl) {
        throw new Error("No payment URL returned");
      }

      // 🔥 redirect to Stripe / PayPal
      window.location.href = res.data.paymentUrl;
    } catch (err) {
      console.error(err);
      alert("Payment initialization failed");
      setLoading(null);
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Payment</h2>

      <p>
        Your slot is <b>reserved temporarily</b>. Complete payment to confirm
        your booking.
      </p>

      <button onClick={() => pay("STRIPE")} disabled={loading}>
        {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
      </button>

      <button onClick={() => pay("PAYPAL")} disabled={loading}>
        {loading === "PAYPAL" ? "Redirecting..." : "Pay with PayPal"}
      </button>
    </div>
  );
}
