import axios from "axios";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import AuthContext from "@/contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "react-relay";
import { LOGOUT_MUTATION } from "@/graphql/logout";

interface DecodedToken {
  exp: number;
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [commit, loadingLogout] = useMutation(LOGOUT_MUTATION);
  const [token, setToken_] = useState(sessionStorage.getItem("token"));

  const setToken = (newToken: SetStateAction<string | null>) => {
    setToken_(newToken);
  };

  const logout = () => {
    setToken(null);

    // revoke the token on server
    commit({
      variables: {},
      onCompleted: () => {
        if (!loadingLogout) {
          console.log("Logout realizado com sucesso");
        }
      },
      onError(error) {
        console.error("Erro ao fazer logout:", error);
      },
    });
  };

  const isTokenExpired = (token: string | null) => {
    if (!token) return true;

    try {
      const decoded: DecodedToken = jwtDecode(token.replace("Bearer ", ""));
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return true;
    }
  };

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      logout();
    } else if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      sessionStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      sessionStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      logout,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
