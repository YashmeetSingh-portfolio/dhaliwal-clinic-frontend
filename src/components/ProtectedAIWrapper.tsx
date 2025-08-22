// src/components/ProtectedAIWrapper.tsx
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import AIProtectedPage from '../pages/AIProtectedPage';
import AIFeatureInfoPage from '../pages/AIFeatureInfoPage';

export default function ProtectedAIWrapper() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;

  return user ? <AIProtectedPage /> : <AIFeatureInfoPage />;
}
