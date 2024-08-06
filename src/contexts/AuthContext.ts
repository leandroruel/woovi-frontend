import { createContext } from "react";

export interface AuthContextType {
  token: string | null;
  setToken: (newToken: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  logout: () => {},
});

export default AuthContext;
