import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import Restaurant from "../pages/Restaurant";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import ManageRooms from "../pages/Admin/ManageRooms";
import ManageReservations from "../pages/Admin/ManageReservations";
import ManageBookings from "../pages/Admin/ManageBookings";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />

      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/rooms"
        element={
          <ProtectedRoute>
            <ManageRooms />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/reservations"
        element={
          <ProtectedRoute>
            <ManageReservations />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/bookings"
        element={
          <ProtectedRoute>
            <ManageBookings />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
