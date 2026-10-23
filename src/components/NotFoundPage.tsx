import { Home, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

interface NotFoundPageProps {
  onHome: () => void;
}

export function NotFoundPage({ onHome }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <Logo />
        <div className="pt-8">
          <p className="font-display text-7xl lg:text-9xl font-bold text-mint-400 leading-none">404</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-2xl lg:text-3xl font-bold text-navy">Page Not Found</h1>
          <p className="text-base text-slate-light max-w-md mx-auto leading-relaxed">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
        </div>
        <button
          onClick={onHome}
          className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy-700 transition-all shadow-lg"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </button>
      </div>
    </div>
  );
}
