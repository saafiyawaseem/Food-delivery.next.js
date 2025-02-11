import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">404</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h3>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
