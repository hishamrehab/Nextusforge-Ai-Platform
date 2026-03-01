import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for session
    const savedUser = localStorage.getItem('nexus_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const mockUser = { id: 1, name: 'Nexus User', email };
    localStorage.setItem('nexus_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (name, email, password) => {
    // Mock register logic
    const mockUser = { id: Date.now(), name, email };
    localStorage.setItem('nexus_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('nexus_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
