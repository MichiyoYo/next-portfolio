import { FaLocationArrow } from 'react-icons/fa6';

import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { BackgroundBeamsWithCollision } from './ui/ExplodingBeams';
import { DotBackground } from './ui/DotBackground';
import { Dock } from './Dock';

export const Hero = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className='flex flex-col items-center justify-center relative z-10'>
          <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h1>
              <TextGenerateEffect
                words='Hi! My name is'
                className='text-center text-[30px] md:text-5xl lg:text-6xl'
              />
              <span className='text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>
                <div className='relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
                  <div className='absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]'>
                    <span>Cristina Lester</span>
                  </div>
                  <div className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple via-violet-500 to-pink-500 py-4'>
                    <span>Cristina Lester</span>
                  </div>
                </div>
              </span>
            </h1>
            <h2 className='mt-5 mb-20'>
              <TextGenerateEffect
                words=' I craft fabulous user experiences ✨'
                className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'
                duration={3}
              />
            </h2>
            <MagicButton title='Check out my work' icon={<FaLocationArrow />} />
            <Dock />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <DotBackground />
    </>
  );
};
