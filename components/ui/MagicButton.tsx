interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export function MagicButton({ title, icon, onClick }: MagicButtonProps) {
  return (
    <button className='p-[3px] relative' onClick={onClick}>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-lg' />
      <div className='inline-flex h-full w-full gap-1 cursor-pointer items-center px-8 py-2  bg-neutral-800 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
        {title} {icon}
      </div>
    </button>
  );
}
