'use client';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Critical Error
            </h2>
            <p className="text-gray-600 mb-6">
              {error.message || 'A critical error occurred'}
            </p>
            <button
              onClick={reset}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
