import { createContext, useContext, useEffect, useMemo, useState } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

const STORAGE_KEY = "bavesta_admin_auth";

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (auth?.token) {
      api.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    } else {
      delete api.defaults.headers.common.Authorization;
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [auth]);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    setAuth({ token: data.token, user: data.user });
    return data;
  };

  const logout = () => setAuth(null);

  const value = useMemo(
    () => ({
      auth,
      user: auth?.user || null,
      isAuthenticated: Boolean(auth?.token),
      login,
      logout,
    }),
    [auth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
