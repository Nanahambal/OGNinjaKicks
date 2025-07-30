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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if we're on the demo dashboard route for auto-login
    const currentPath = window.location.pathname;
    
    if (currentPath === '/demo-dashboard' || currentPath === '/') {
      // Auto-login for demo dashboard
      const mockUser: User = {
        id: 'demo-user-123',
        name: 'Shadow Walker',
        email: 'ninja@dojo.com',
        memberSince: '2024-01-15',
        ninjaRank: 'Silver',
        xp: 1250,
        raffleEntries: 5,
        totalSpent: 850,
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      };
      
      setUser(mockUser);
      setSession({ user: mockUser });
      setIsAuthenticated(true);
    } else {
      // Don't auto-login for other routes (like demo-login)
      setUser(null);
      setSession(null);
      setIsAuthenticated(false);
    }
    
    setLoading(false);
  }, [window.location.pathname]);

  const signUp = async (email: string, password: string, name: string) => {
    // Demo mode - simulate successful signup and login
    const mockUser: User = {
      id: 'demo-user-123',
      name: name,
      email: email,
      memberSince: new Date().toISOString().split('T')[0],
      ninjaRank: 'Bronze',
      xp: 0,
      raffleEntries: 3,
      totalSpent: 0,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    };
    
    setUser(mockUser);
    setSession({ user: mockUser });
    setIsAuthenticated(true);
    return {};
  };

  const signIn = async (email: string, password: string) => {
    console.log('SignIn called with:', { email, password });
    
    setLoading(true);
    
    try {
      // Check for demo credentials FIRST
      if (email === 'ninja@dojo.com' && password === 'shadow123') {
        console.log('Demo credentials matched!');
        
        const mockUser: User = {
          id: 'demo-user-123',
          name: 'Shadow Walker',
          email: email,
          memberSince: '2024-01-15',
          ninjaRank: 'Silver',
          xp: 1250,
          raffleEntries: 5,
          totalSpent: 850,
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        };
        
        setUser(mockUser);
        setSession({ user: mockUser });
        setIsAuthenticated(true);
        console.log('Authentication state updated:', { user: mockUser, isAuthenticated: true });
        setLoading(false);
        return {};
      }
      
      // For any other valid email/password combination
      if (email && password && email.includes('@') && password.length >= 3) {
        console.log('Using fallback credentials');
        
        const mockUser: User = {
          id: 'demo-user-456',
          name: 'New Ninja',
          email: email,
          memberSince: new Date().toISOString().split('T')[0],
          ninjaRank: 'Bronze',
          xp: 0,
          raffleEntries: 3,
          totalSpent: 0,
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        };
        
        setUser(mockUser);
        setSession({ user: mockUser });
        setIsAuthenticated(true);
        console.log('Authentication state updated:', { user: mockUser, isAuthenticated: true });
        setLoading(false);
        return {};
      }
      
      // Return error for invalid credentials
      console.log('Invalid credentials provided');
      setLoading(false);
      return { error: 'Invalid credentials. Use ninja@dojo.com / shadow123 for demo access.' };
      
    } catch (error) {
      console.error('SignIn error:', error);
      setLoading(false);
      return { error: 'Authentication failed' };
    }
  };

  const signOut = async () => {
    // Demo mode - simulate logout
    setUser(null);
    setSession(null);
    setIsAuthenticated(false);
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
    isAuthenticated,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};