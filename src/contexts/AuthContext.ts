import { createContext } from "react";

export interface AuthContextType {
  token: string | null;
  setToken: (newToken: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
