import { FaLocationArrow } from 'react-icons/fa6';

// import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { DotBackground } from './ui/DotBackground';
import { MagicButton } from './ui/MagicButton';

export const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <DotBackground />

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1>
            <TextGenerateEffect
              words='Hi! I am Cristina Lester,'
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
            />
            <span className='block text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              the unicorn software engineer.
            </span>
          </h1>
          <h2 className='mb-10 uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            I craft fabulous user experiences ✨
          </h2>
          <a href='#about'>
            <MagicButton title='Check out my work' icon={<FaLocationArrow />} />
          </a>
        </div>
      </div>
    </div>
  );
};
