import { useLocation } from "react-router-dom";
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
    </div>
  );
}

export default App;
