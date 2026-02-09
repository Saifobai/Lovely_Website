// import React, { useState, useEffect } from "react";
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
// import ClientEngagement from "./pages/ClientEngagement/ClientEngagement";

// // Import your logo here
// import loading_logo from "./assets/Images/loading_logo_2.png";
// import loading_logo_03 from "./assets/Images/loading_logo_3.png";

// import PaymentSuccess from "./pages/payment/PaymentSuccess";

// const pageVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// export default function App() {
//   const location = useLocation();
//   const [siteLoading, setSiteLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSiteLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const hideNavbarAndFooterPaths = [
//     "/book",
//     "/legal",
//     "/privacy",
//     "/client-engagement",
//     "/success",
//   ];
//   const shouldHideUI = hideNavbarAndFooterPaths.includes(location.pathname);

//   return (
//     <>
//       <Toaster />

//       <AnimatePresence mode="wait">
//         {siteLoading ? (
//           /* WATERMARK LOGO LOADER */
//           <motion.div
//             key="global-loader"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414] overflow-hidden"
//           >
//             {/* The "Body Watermark" Logo */}
//             <motion.img
//               src={loading_logo}
//               alt="Build with Intention"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: [0, 0.15, 0.25], // subtle but colorful
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeInOut",
//                 times: [0, 0.6, 1],
//               }}
//               className="
//                 absolute inset-0
//                 w-full h-full
//                 object-cover
//                 pointer-events-none
//                 select-none
//                 opacity-20"
//             />

//             {/* Optional: Minimal loading line at the bottom */}
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "100px" }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               className="absolute bottom-20 h-[1px] bg-white/20"
//             />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="main-app-content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             {!shouldHideUI && <Navbar />}

//             <AnimatePresence mode="wait">
//               <Routes location={location} key={location.pathname}>
//                 <Route
//                   path="/"
//                   element={
//                     <PageWrapper>
//                       <HomePage />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/book"
//                   element={
//                     <PageWrapper>
//                       <BookingPage />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/legal"
//                   element={
//                     <PageWrapper>
//                       <LegalInformation />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/privacy"
//                   element={
//                     <PageWrapper>
//                       <PrivacyPolicy />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/client-engagement"
//                   element={
//                     <PageWrapper>
//                       <ClientEngagement />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/success"
//                   element={
//                     <PageWrapper>
//                       <PaymentSuccess />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/paypal-success"
//                   element={
//                     <PageWrapper>
//                       <PayPalSuccess />
//                     </PageWrapper>
//                   }
//                 />
//                 <Route
//                   path="/cancel/:id"
//                   element={
//                     <PageWrapper>
//                       <CancelPage />
//                     </PageWrapper>
//                   }
//                 />
//               </Routes>
//             </AnimatePresence>

//             {!shouldHideUI && <Footer />}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// function PageWrapper({ children }) {
//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

//=========================================================================
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
import ClientEngagement from "./pages/ClientEngagement/ClientEngagement";
import PaymentSuccess from "./pages/payment/PaymentSuccess";

// ✅ hook
import useIsMobile from "./components/hooks/useIsMobile";

// logos
import loading_logo from "./assets/Images/loading_logo_2.png";
import loading_logo_03 from "./assets/Images/loading_logo_03.png";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  const location = useLocation();
  const [siteLoading, setSiteLoading] = useState(true);

  // ✅ detect mobile
  const isMobile = useIsMobile();

  // ✅ choose correct logo
  const loadingLogo = isMobile ? loading_logo_03 : loading_logo;

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
    "/success",
  ];

  const shouldHideUI = hideNavbarAndFooterPaths.includes(location.pathname);

  return (
    <>
      <Toaster />

      <AnimatePresence mode="wait">
        {siteLoading ? (
          /* ================= LOADER ================= */
          <motion.div
            key="global-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414] overflow-hidden"
          >
            {/* Watermark logo */}
            <motion.img
              src={loadingLogo}
              alt="Build with Intention"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isMobile ? [0, 0.25, 0.35] : [0, 0.15, 0.25],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.6, 1],
              }}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                pointer-events-none
                select-none
              "
            />

            {/* Minimal loading line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute bottom-20 h-[1px] bg-white/20"
            />
          </motion.div>
        ) : (
          /* ================= APP ================= */
          <motion.div
            key="main-app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
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
                  path="/success"
                  element={
                    <PageWrapper>
                      <PaymentSuccess />
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

/* ================= PAGE WRAPPER ================= */

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
