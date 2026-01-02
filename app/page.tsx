'use client';
import { useRef } from 'react';
import Navbar from './Components/Nav/Navbar';
import Button from './Components/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BirdAnimations from './Components/BirdAnimations';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  //   gsap timeline animations for hero content
  useGSAP(
    () => {
      tl.current = gsap.timeline();

      gsap.set('.hero-badge, .hero-heading, .hero-description, .hero-buttons', {
        opacity: 0,
        y: 30,
      });

      tl.current
        .to('.hero-badge', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
        .to(
          '.hero-heading',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6'
        )
        .to(
          '.hero-description',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          '.hero-buttons',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6'
        );
    },
    { scope: heroRef }
  );

  return (
    <div className='w-full min-h-screen overflow-hidden'>
      <Navbar />

      <div
        ref={heroRef}
        className='w-full flex items-center justify-center px-5'
      >
        {/* hero content */}
        <main className='flex w-full flex-col gap-12 items-center justify-center max-w-[736px] mt-[64px] -tracking-[2%]'>
          <div className='flex flex-col gap-6 items-center'>
            <div className='hero-badge opacity-0 y-30 flex items-center gap-2 px-2 pt-1 pb-[5px] bg-white rounded-full w-max'>
              <svg
                width='32'
                height='17'
                viewBox='0 0 32 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='32' height='17' rx='8.5' fill='#007AFF' />
                <circle cx='9.65888' cy='8.65888' r='1.65888' fill='white' />
                <circle cx='16.2944' cy='8.65891' r='1.65888' fill='white' />
                <circle cx='22.9299' cy='8.65891' r='1.65888' fill='white' />
              </svg>

              <div>
                <h5 className='text-blue-500 leading-[19px] font-medium text-base tracking-[-0.277px]'>
                  #1 iMessage Automation Tool
                </h5>
              </div>
            </div>

            <div className='hero-heading opacity-0 y-30'>
              <h1 className='text-gray-900 font-bold md:text-[64px] sm:text-[50px] text-[45px] text-center sm:leading-[120%] leading-[110%] '>
                <span className='text-blue-500'>iMessage </span>
                Automation <br className=' @max-[525px]:hidden' /> for Teams and
                AI <br className='max-[525px]:hidden' />
                Workflows.
              </h1>
            </div>

            <div className='hero-description opacity-0 y-30'>
              <p className='text-black leading-[130%] sm:text-lg text-base text-center'>
                Coup lets you, your team, or AI workflows send iMessages
                directly from your phone number, running securely on your Mac or
                Mac Mini.
              </p>
            </div>
          </div>

          <div className='hero-buttons opacity-0 y-30 flex gap-3 flex-col sm:flex-row items-center'>
            <Button text='Get Started' />
            <Button
              text='Download the Mac app'
              type='secondary'
              icon={
                <svg
                  width='19'
                  height='22'
                  viewBox='0 0 19 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.4077 11.6258C15.3979 9.82322 16.2107 8.4627 17.8557 7.46073C16.9353 6.13951 15.5448 5.41259 13.7088 5.27015C11.9707 5.13263 10.0711 6.28686 9.37585 6.28686C8.64145 6.28686 6.95723 5.31927 5.6353 5.31927C2.90333 5.36348 0 7.50494 0 11.8615C0 13.1484 0.235008 14.4778 0.705025 15.8498C1.33171 17.6523 3.59367 22.0728 5.95355 21.9991C7.18734 21.9696 8.05883 21.1199 9.66472 21.1199C11.2216 21.1199 12.0295 21.9991 13.4053 21.9991C15.7847 21.9647 17.8313 17.947 18.4286 16.1395C15.2364 14.6317 15.4077 11.7191 15.4077 11.6258ZM12.6366 3.56092C13.9732 1.96955 13.8508 0.52063 13.8116 0C12.6317 0.0687625 11.2657 0.805504 10.4872 1.71415C9.63045 2.68665 9.12616 3.88999 9.23387 5.2456C10.5117 5.34383 11.677 4.68567 12.6366 3.56092Z'
                    fill='#1D2026'
                  />
                </svg>
              }
            />
          </div>
        </main>
      </div>

      {/* bird animations */}
      <BirdAnimations />
    </div>
  );
}
