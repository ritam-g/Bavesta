import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const adminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-midnight text-pearl">
      {!adminRoute && <Navbar />}
      <main className={adminRoute ? "min-h-screen" : "pt-20"}>
        <AppRoutes />
      </main>
      {!adminRoute && <Footer />}
    </div>
  );
}

export default App;
