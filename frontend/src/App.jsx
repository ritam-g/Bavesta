import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const onAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-cream text-espresso">
      {!onAdminRoute && <Navbar />}
      <main className={onAdminRoute ? "min-h-screen" : "pt-20"}>
        <AppRoutes />
      </main>
      {!onAdminRoute && <Footer />}
    </div>
  );
}

export default App;
