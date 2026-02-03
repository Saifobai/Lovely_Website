// import { Routes, Route, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./components/navbar/Navbar";
// import HomePage from "./pages/Home/HomePage";
// import BookingPage from "./pages/bookingpage/BookingPage";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";
// import CancelPage from "./pages/bookingpage/CancelPage";
// import PayPalSuccess from "./pages/payment/PaypalSuccess";

// const pageVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// export default function App() {
//   const location = useLocation();

//   return (
//     <>
//       <Toaster />
//       <Navbar />

//       {/* 🔥 Page-based navigation */}
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <HomePage />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/book"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <BookingPage />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/paypal-success"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <PayPalSuccess />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/cancel/:id"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <CancelPage />
//               </motion.div>
//             }
//           />
//         </Routes>
//       </AnimatePresence>

//       <Footer />
//     </>
//   );
// }

// import { Routes, Route, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./components/navbar/Navbar";
// import HomePage from "./pages/Home/HomePage";
// import BookingPage from "./pages/bookingpage/BookingPage";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";
// import CancelPage from "./pages/bookingpage/CancelPage";
// import PayPalSuccess from "./pages/payment/PaypalSuccess";
// import LegalInformation from "./pages/LegalInfo/LegalInformation";
// import PrivacyPolicy from "./pages/Privacy/PrivacyPloicy";
// import ClientEngagement from "./pages/ClientEngagement/ClientEngagment";

// const pageVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// export default function App() {
//   const location = useLocation();

//   // Define paths where the Footer should be hidden
//   const hideFooterPaths = ["/book", "/legal", "/privacy", "/client-engagement"];
//   const shouldHideFooter = hideFooterPaths.includes(location.pathname);

//   const hideNavbarPaths = ["/book", "/legal", "/privacy", "/client-engagement"];
//   const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

//   return (
//     <>
//       <Toaster />
//       {!shouldHideNavbar && <Navbar />}

//       {/* 🔥 Page-based navigation */}
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <HomePage />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/book"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <BookingPage />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/legal"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <LegalInformation />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/privacy"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <PrivacyPolicy />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/client-engagement"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <ClientEngagement />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/paypal-success"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <PayPalSuccess />
//               </motion.div>
//             }
//           />

//           <Route
//             path="/cancel/:id"
//             element={
//               <motion.div
//                 variants={pageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <CancelPage />
//               </motion.div>
//             }
//           />
//         </Routes>
//       </AnimatePresence>

//       {/* Only render Footer if not on the booking page */}
//       {!shouldHideFooter && <Footer />}
//     </>
//   );
// }

//==============================================================
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import BookingPage from "./pages/bookingpage/BookingPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import CancelPage from "./pages/bookingpage/CancelPage";
import PayPalSuccess from "./pages/payment/PaypalSuccess";
import LegalInformation from "./pages/LegalInfo/LegalInformation";
import PrivacyPolicy from "./pages/Privacy/PrivacyPloicy";
import ClientEngagement from "./pages/ClientEngagement/ClientEngagment";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  const location = useLocation();
  const [siteLoading, setSiteLoading] = useState(true);

  // Global loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const hideNavbarAndFooterPaths = [
    "/book",
    "/legal",
    "/privacy",
    "/client-engagement",
  ];
  const shouldHideUI = hideNavbarAndFooterPaths.includes(location.pathname);

  return (
    <>
      <Toaster />

      <AnimatePresence mode="wait">
        {siteLoading ? (
          /* 2-SECOND WATERMARK LOADER */
          <motion.div
            key="global-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
          >
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: [0, 0.4, 0.2], letterSpacing: "0.4em" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-white text-3xl md:text-6xl font-black italic uppercase text-center selection:none pointer-events-none tracking-widest"
            >
              Build with Intention
            </motion.h2>
          </motion.div>
        ) : (
          /* ACTUAL SITE CONTENT */
          <motion.div
            key="main-app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {!shouldHideUI && <Navbar />}

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageWrapper>
                      <HomePage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/book"
                  element={
                    <PageWrapper>
                      <BookingPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/legal"
                  element={
                    <PageWrapper>
                      <LegalInformation />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/privacy"
                  element={
                    <PageWrapper>
                      <PrivacyPolicy />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/client-engagement"
                  element={
                    <PageWrapper>
                      <ClientEngagement />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/paypal-success"
                  element={
                    <PageWrapper>
                      <PayPalSuccess />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/cancel/:id"
                  element={
                    <PageWrapper>
                      <CancelPage />
                    </PageWrapper>
                  }
                />
              </Routes>
            </AnimatePresence>

            {!shouldHideUI && <Footer />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Reusable wrapper to avoid repeating motion.div in every route
 */
function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
