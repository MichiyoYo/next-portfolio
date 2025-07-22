export function Badge({
  Icon,
  label = '',
  color = 'emerald-600',
  className = '',
}: {
  Icon?: React.ComponentType<{ size?: number; fill?: string }>;
  label?: string;
  color?: string;
  className?: string;
}) {
  if (!label && !Icon) return null;
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 bg-${color} text-white rounded-full text-sm font-medium ${className}`}
    >
      {Icon && <Icon size={12} fill='currentColor' />}
      {label && <span>{label}</span>}
    </span>
  );
}
