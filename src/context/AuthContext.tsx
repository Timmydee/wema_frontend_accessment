import { createContext } from "react";
import { User } from "../utils/type";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  loading: boolean
};

export const AuthContext = createContext<AuthContextType | null>(null);

