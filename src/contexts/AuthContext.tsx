import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  session: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
  updateProfile: (updates: Partial<User>) => Promise<{ error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Demo mode - create a mock user for preview
    const mockUser: User = {
      id: 'demo-user-123',
      name: 'Shadow Walker',
      email: 'demo@ogninja.com',
      memberSince: '2024-01-15',
      ninjaRank: 'Silver',
      xp: 1250,
      raffleEntries: 5,
      totalSpent: 850,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    };
    
    setUser(mockUser);
    setSession({ user: mockUser });
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    // Demo mode - simulate successful signup
    return {};
  };

  const signIn = async (email: string, password: string) => {
    // Demo mode - simulate successful login
    return {};
  };

  const signOut = async () => {
    // Demo mode - simulate logout
    setUser(null);
    setSession(null);
  };

  const resetPassword = async (email: string) => {
    // Demo mode - simulate password reset
    return {};
  };

  const updateProfile = async (updates: Partial<User>) => {
    // Demo mode - simulate profile update
    if (!user) return { error: 'No user logged in' };
    setUser({ ...user, ...updates });
    return {};
  };

  const value = {
    user,
    session,
    isAuthenticated: true, // Always authenticated in demo mode
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};