export function DotBackground() {
  return (
    <div className='absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.3] flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  );
}
