import { FaLocationArrow } from 'react-icons/fa6';

import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { BackgroundBeamsWithCollision } from './ui/ExplodingBeams';
import { DotBackground } from './ui/DotBackground';

export const Hero = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className='flex flex-col items-center justify-center relative z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h1>
              <TextGenerateEffect
                words='Hi! I am Cristina Lester.'
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
              />
            </h1>
            <h2 className='mt-5 mb-20'>
              <TextGenerateEffect
                words=' I craft fabulous user experiences ✨'
                className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'
                duration={3}
              />
            </h2>
            <MagicButton title='Check out my work' icon={<FaLocationArrow />} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <DotBackground />
    </>
  );
};
