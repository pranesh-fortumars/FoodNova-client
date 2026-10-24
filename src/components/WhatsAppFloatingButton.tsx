import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/data/content';

export function WhatsAppFloatingButton() {
  const prefilledUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent(
    'Hi Joshika, I would like to discuss a food product development project with FoodNova Consulting.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 group flex items-center">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3 px-3 py-1.5 rounded-lg bg-navy text-white text-xs font-medium shadow-md whitespace-nowrap">
        Chat with Joshika on WhatsApp
      </span>
      <a
        href={prefilledUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Joshika on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform relative"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </a>
    </div>
  );
}
