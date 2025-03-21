import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../utils/type";
import { authenticateUser } from "../mockDb/mockDb";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem("currentUser");
    if (storedAuth) {
      const { user: storedUser, isAuthenticated: storedIsAuthenticated } = JSON.parse(storedAuth);
      setUser(storedUser);
      setIsAuthenticated(storedIsAuthenticated);
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const authenticatedUser = authenticateUser(email, password);
    if (authenticatedUser) {
      setIsAuthenticated(true);
      setUser(authenticatedUser);
      localStorage.setItem("currentUser", JSON.stringify({ user: authenticatedUser, isAuthenticated: true }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
