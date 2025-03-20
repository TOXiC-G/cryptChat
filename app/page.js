'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/chats');
      } else {
        router.push('/auth/sign-in');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg">Loading...</div>
    </div>
  );
}