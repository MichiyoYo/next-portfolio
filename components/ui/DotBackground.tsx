export function DotBackground() {
  return (
    <div className='absolute top-0 left-0 h-screen w-full bg-transparent dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  );
}
