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
// import ClientEngagement from "./pages/ClientEngagement/ClientEngagment";

// const pageVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// export default function App() {
//   const location = useLocation();
//   const [siteLoading, setSiteLoading] = useState(true);

//   // Global loading timer
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
//   ];
//   const shouldHideUI = hideNavbarAndFooterPaths.includes(location.pathname);

//   return (
//     <>
//       <Toaster />

//       <AnimatePresence mode="wait">
//         {siteLoading ? (
//           /* 2-SECOND WATERMARK LOADER */
//           <motion.div
//             key="global-loader"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
//           >
//             <div className="flex flex-col items-center gap-6">
//               {/* LARGE CURSIVE 'L' */}
//               <motion.span
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{
//                   opacity: [0, 0.4, 0.3],
//                   scale: [0.9, 1, 0.98],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="text-[180px] md:text-[340px] leading-none text-white font-serif italic select-none pointer-events-none opacity-30"
//                 style={{
//                   fontFamily: "'Dancing Script', cursive",
//                   fontWeight: 200,
//                 }}
//               >
//                 L
//               </motion.span>

//               {/* SUBTITLE */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: [0, 0.5, 0.3] }}
//                 transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
//                 className="flex flex-col items-center gap-4"
//               >
//                 <span
//                   className="text-xs md:text-sm tracking-[0.6em] uppercase text-blue-500 font-light"
//                   style={{ fontFamily: "'Dancing Script', cursive" }}
//                 >
//                   build with intention
//                 </span>

//                 {/* PROGRESS LINE */}
//                 <div className="w-12 h-[1px] bg-blue-500/20 relative overflow-hidden">
//                   <motion.div
//                     initial={{ left: "-100%" }}
//                     animate={{ left: "100%" }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="absolute top-0 w-1/2 h-full bg-blue-500"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ) : (
//           /* ACTUAL SITE CONTENT */
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

// /**
//  * Reusable wrapper to avoid repeating motion.div in every route
//  */
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

// //======================================================================
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

// Import your logo here
import loading_logo from "./assets/Images/loading_logo_2.png";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  const location = useLocation();
  const [siteLoading, setSiteLoading] = useState(true);

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
          /* WATERMARK LOGO LOADER */
          <motion.div
            key="global-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414] overflow-hidden"
          >
            {/* The "Body Watermark" Logo */}
            <motion.img
              src={loading_logo}
              alt="Build with Intention"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.15, 0.25], // subtle but colorful
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
                opacity-20"
            />

            {/* Optional: Minimal loading line at the bottom */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute bottom-20 h-[1px] bg-white/20"
            />
          </motion.div>
        ) : (
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
