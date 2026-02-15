interface RibbonBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'blue';
}

export default function RibbonBadge({ children, className = '', variant = 'dark' }: RibbonBadgeProps) {
  const bg = variant === 'blue' ? 'bg-primary' : 'bg-dark';
  return (
    <div className={`inline-flex items-center mb-4 ${className}`}>
      <div
        className={`${bg} text-white text-xs text-lg font-semibold tracking-wide uppercase px-8 py-2`}
        style={{
          clipPath:
            'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)',
        }}
      >
        <span className="italic">{children}</span>
      </div>
    </div>
  );
}
