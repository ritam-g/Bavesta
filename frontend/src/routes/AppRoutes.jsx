import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PageTransition from "../components/animations/PageTransition";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import BookHotel from "../pages/BookHotel";
import BookRestaurant from "../pages/BookRestaurant";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import ManageServices from "../pages/Admin/ManageServices";
import ManageInquiries from "../pages/Admin/ManageInquiries";
import ManageBookings from "../pages/Admin/ManageBookings";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

function withTransition(component) {
  return <PageTransition>{component}</PageTransition>;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={withTransition(<Home />)} />
        <Route path="/rooms" element={withTransition(<Rooms />)} />
        <Route path="/rooms/:id" element={withTransition(<RoomDetails />)} />
        <Route path="/book-hotel" element={withTransition(<BookHotel />)} />
        <Route path="/book-restaurant" element={withTransition(<BookRestaurant />)} />
        <Route path="/services" element={withTransition(<Services />)} />
        <Route path="/services/:id" element={withTransition(<ServiceDetail />)} />
        <Route path="/about" element={withTransition(<About />)} />
        <Route path="/contact" element={withTransition(<Contact />)} />

        <Route path="/admin/login" element={withTransition(<Login />)} />
        <Route
          path="/admin/dashboard"
          element={withTransition(
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>,
          )}
        />
        <Route
          path="/admin/services"
          element={withTransition(
            <ProtectedRoute>
              <ManageServices />
            </ProtectedRoute>,
          )}
        />
        <Route
          path="/admin/inquiries"
          element={withTransition(
            <ProtectedRoute>
              <ManageInquiries />
            </ProtectedRoute>,
          )}
        />
        <Route
          path="/admin/bookings"
          element={withTransition(
            <ProtectedRoute>
              <ManageBookings />
            </ProtectedRoute>,
          )}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
