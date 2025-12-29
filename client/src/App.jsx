import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import BookingPage from "./pages/bookingpage/BookingPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import CancelPage from "./pages/bookingpage/CancelPage";
import PayPalSuccess from "./pages/payment/PaypalSuccess";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <Toaster />
      <Navbar />

      {/* 🔥 Page-based navigation */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <HomePage />
              </motion.div>
            }
          />

          <Route
            path="/book"
            element={
              <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <BookingPage />
              </motion.div>
            }
          />

          <Route
            path="/paypal-success"
            element={
              <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <PayPalSuccess />
              </motion.div>
            }
          />

          <Route
            path="/cancel/:id"
            element={
              <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CancelPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
