import { NAV_ITEMS } from '@/components/constants';
import { Hero } from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto '>
      <FloatingNav navItems={NAV_ITEMS} />
      <Hero />
    </main>
  );
}
