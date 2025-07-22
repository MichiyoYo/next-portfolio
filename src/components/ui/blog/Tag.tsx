import { Hash } from 'lucide-react';

export function Tag({ name, color }: { name: string; color?: string }) {
  return (
    <span
      className={`flex flex-wrap gap-1 items-center text-xs bg-${
        color || 'emerald-600'
      }/20 text-${color || 'emerald-300'} px-2 py-1 rounded`}
    >
      <Hash size={12} fill='currentColor' />
      {name}
    </span>
  );
}
