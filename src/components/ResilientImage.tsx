import { useState } from 'react';
import { Home } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'HappyCleans Residence',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  width,
  height,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#F7F7F2] text-[#244B40] p-8 text-center border border-[#244B40]/10 ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#A9C7B2]/25 flex items-center justify-center mb-3">
          <Home className="w-5 h-5 text-[#244B40]" aria-hidden="true" />
        </div>
        <p className="font-serif text-lg text-[#26332E]">{fallbackTitle}</p>
        <p className="text-xs text-[#26332E]/70 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
