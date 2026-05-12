import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const adminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-[#efefec] text-[#1f2734]">
      {!adminRoute && <Navbar />}
      <main className="min-h-screen">
        <AppRoutes />
      </main>

      {!adminRoute && <Footer />}

      {/* Global toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: "10px",
            background: "#1f2734",
            color: "#fff",
            fontSize: "14px",
            fontFamily: "inherit",
            padding: "14px 18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          },
          success: {
            iconTheme: { primary: "#b8924a", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#fff" },
          },
        }}
      />
    </div>
  );
}

export default App;
