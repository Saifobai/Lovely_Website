import { useEffect, useState } from "react";
import { CheckCircle2, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PayPalSuccess() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const capturePayment = async () => {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get("token");

      if (!orderId) {
        setStatus("error");
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/api/paypal/capture/${orderId}`,
          { method: "POST" }
        );

        if (!res.ok) throw new Error("Capture failed");

        setStatus("success");

        // Optional: redirect after delay
        setTimeout(() => {
          navigate("/calendar"); // or homepage
        }, 4000);
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    capturePayment();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-10 max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <Loader
              className="mx-auto mb-6 animate-spin text-blue-500"
              size={48}
            />
            <h2 className="text-white text-xl font-bold mb-2">
              Finalizing Payment
            </h2>
            <p className="text-slate-500 text-sm">
              Please wait while we confirm your booking…
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle2 className="mx-auto mb-6 text-green-500" size={48} />
            <h2 className="text-white text-xl font-bold mb-2">
              Booking Confirmed
            </h2>
            <p className="text-slate-500 text-sm">
              Your session has been successfully booked.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-red-500 text-xl font-bold mb-2">
              Payment Error
            </h2>
            <p className="text-slate-500 text-sm">
              Something went wrong. Please contact support.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
