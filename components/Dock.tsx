import React from 'react';
import {
  VscGithub,
  VscHome,
  VscTerminal,
  VscCoffee,
  VscCode,
} from 'react-icons/vsc';

import { FloatingDock } from './ui/FloatingDock';

export function Dock() {
  const links = [
    {
      title: 'Home',
      icon: (
        <VscHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '#',
    },

    {
      title: 'Products',
      icon: (
        <VscTerminal className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <VscCode className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <VscCoffee className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '#',
    },

    {
      title: 'GitHub',
      icon: (
        <VscGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: '#',
    },
  ];
  return (
    <div className='fixed bottom-10 left-0 right-0 z-50 flex justify-center items-end w-full'>
      <div className='flex items-end justify-center w-full '>
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
