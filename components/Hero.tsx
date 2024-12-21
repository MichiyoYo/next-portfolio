import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation';

function Hero() {
  return (
    <BackgroundGradientAnimation>
      <div className='absolute z-50 inset-0 flex items-center justify-center flex-col text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'>
        <h1 className='bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/70'>
          Hi, I&apos;m Cristina Lester
          <span className='block bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/70 to-white/20'>
            a unicorn developer
          </span>
        </h1>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Hero;
