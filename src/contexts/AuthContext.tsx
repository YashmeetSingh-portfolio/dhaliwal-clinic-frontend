import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path to your firebase config

interface AuthContextType {
  user: User | null;
  sessionId: string;
  credits: number;
  loading: boolean;
  refetchCredits: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [credits, setCredits] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCredits = async (currentSessionId: string) => {
    if (!currentSessionId) return;
    try {
      const res = await fetch(`http://localhost:3000/get-credits/${currentSessionId}`);
      const data = await res.json();
      setCredits(data.credits);
    } catch (err) {
      console.error('Error fetching credits:', err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const userSessionId = `user-${currentUser.uid}`;
        setUser(currentUser);
        setSessionId(userSessionId);
        fetchCredits(userSessionId);
      } else {
        setUser(null);
        setSessionId('');
        setCredits(0);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    sessionId,
    credits,
    loading,
    refetchCredits: () => fetchCredits(sessionId),
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};