import { useRouter } from "next/router";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  loggedUsername: string;
  validate: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedUsername, setLoggedUsername] = useState("");
  const router = useRouter();

  const validate = (username: string, password: string) => {
    if (
      username === password /* username === "guest" && password === "guest" */
    ) {
      setLoggedUsername(username);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setLoggedUsername("");
    router.push("/emotion-sync/login");
  };

  return (
    <AuthContext.Provider value={{ loggedUsername, validate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
