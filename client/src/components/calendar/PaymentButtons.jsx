export default function PaymentButtons({ bookingId }) {
  const payWithStripe = async () => {
    const res = await fetch("http://localhost:5000/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  const payWithPayPal = async () => {
    const res = await fetch("http://localhost:5000/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId }),
    });
    const data = await res.json();
    window.location.href = data.approvalUrl;
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={payWithStripe}
        className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase"
      >
        Pay with Card (Stripe)
      </button>

      <button
        onClick={payWithPayPal}
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase"
      >
        Pay with PayPal
      </button>
    </div>
  );
}
