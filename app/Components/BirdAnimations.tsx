'use client';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const BirdAnimations = () => {
  const tl = useRef<GSAPTimeline>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  //   gsap timeline animations
  useGSAP(
    () => {
      tl.current = gsap.timeline();

      tl.current
        .fromTo(
          '.clouds',
          {
            bottom: '-100%',
            opacity: 0,
          },
          {
            bottom: '0',
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
          }
        )
        .fromTo(
          '.bird',
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            stagger: {
              from: 'random',
              amount: 0.5,
            },
          },
          '-=0.4'
        )
        .to(
          '.fly-right',
          {
            motionPath: {
              path: '#path',
              align: '#path',
              start: 1,
              end: 0,

              alignOrigin: [0.5, 0.5],
            },
            duration: 4,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .to(
          '.fly-left',
          {
            motionPath: {
              path: '#path-two',
              align: '#path-two',
              start: 1,
              end: 0,

              alignOrigin: [0.5, 0.5],
            },
            duration: 4,
            ease: 'power2.out',
          },

          '-=3.7'
        )
        .to(
          '.fly-right',
          {
            opacity: 0,
            ease: 'power2.out',
          },
          '-=1'
        )
        .to(
          '.fly-left',
          {
            opacity: 0,
            ease: 'power2.out',
          },
          '<'
        );
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className='overflow-hidden'>
      {/* footer cloud */}
      <div className='absolute bottom-0 opacity-0 clouds  left-0 w-full'>
        <Image
          src='/clouds.svg'
          alt='cloud'
          width={1000}
          height={1000}
          className='w-full h-auto object-center object-cover'
        />
      </div>

      {/* top birds animation */}
      {[
        {
          top: 'top-[calc(291/1080*100vh)]',
          left: 'left-[calc(298/1920*100vw)]',
        },
        {
          top: 'top-[calc(329/1080*100vh)]',
          left: 'left-[calc(495/1920*100vw)]',
        },
        {
          top: 'top-[calc(305/1080*100vh)]',
          left: 'right-[calc(471/1920*100vw)]',
        },
        {
          top: 'top-[calc(465/1080*100vh)]',
          left: 'right-[calc(431/1920*100vw)]',
        },
      ].map((bird, index) => (
        <div
          key={index}
          className={`absolute ${bird.top} ${bird.left} ${
            index === 1 || index === 2 ? 'hidden sm:block' : ''
          }`}
        >
          <svg
            width='43'
            height='14'
            viewBox='0 0 43 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`${'bird-' + index} bird opacity-0`}
          >
            <path
              d='M0.184547 0.00157207C1.3409 0.0785971 9.20524 1.31197 13.0604 2.23725C16.9155 3.16252 20.9247 8.48212 21.85 8.71319C22.7753 8.94427 27.2466 8.4051 31.1018 8.09602C34.9569 7.78792 42.3582 12.0282 42.3582 12.0282C42.3582 13.6477 34.8789 11.18 32.2581 11.0259C29.6364 10.8719 25.5501 11.7201 24.7019 12.4133C23.8536 13.1075 22.2351 14.0328 20.8467 13.9558C19.4593 13.8788 15.5271 11.1029 15.141 10.5638C14.7549 10.0236 16.7605 9.79251 16.7605 9.79251C16.7605 9.79251 16.7605 9.79253 14.91 7.47983C13.0594 5.16713 8.97319 4.0878 6.27439 3.3936C3.57754 2.70038 -0.971803 -0.0754529 0.184547 0.00157207Z'
              fill='#00336B'
            />
          </svg>
        </div>
      ))}

      {/* bottom birds animation */}
      <div
        className={`absolute bottom-[calc(77/1080*100vh)] left-[calc(371/1920*100vw)]`}
      >
        <svg
          width='104'
          height='77'
          viewBox='0 0 104 77'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='bird-4 bird opacity-0'
        >
          <g>
            <rect
              x='99.9526'
              y='53.873'
              width='34.4262'
              height='19.9066'
              rx='9.95328'
              transform='rotate(138.345 99.9526 53.873)'
              fill='#007AFF'
            />
            <circle
              cx='86.3942'
              cy='53.2447'
              r='1.99066'
              transform='rotate(138.345 86.3942 53.2447)'
              fill='white'
            />
            <circle
              cx='80.4447'
              cy='58.537'
              r='1.99066'
              transform='rotate(138.345 80.4447 58.537)'
              fill='white'
            />
            <circle
              cx='74.4955'
              cy='63.8293'
              r='1.99066'
              transform='rotate(138.345 74.4955 63.8293)'
              fill='white'
            />
          </g>
          <path
            d='M80.8727 29.9675C88.1729 27.2786 104.212 24.4933 103.349 23.6285C102.484 22.7636 82.0264 22.6673 74.6299 27.5656C69.0928 31.2334 59.6284 42.2742 55.2196 47.5931C53.6511 37.6668 49.8103 21.7199 45.197 16.3105C38.3174 8.24174 0 0 0 0C1.72776 4.41867 27.6619 15.7523 35.0349 21.1302C41.0928 25.5508 42.2054 44.9887 43.369 52.7488C38.7027 54.4746 35.6874 56.1631 38.17 57.767C42.5965 60.625 51.5321 62.1916 57.0535 61.4722C60.4815 61.024 70.8854 55.5164 69.9242 52.6388C69.5311 51.4594 67.3827 50.4785 64.4697 49.8948C68.3832 44.3419 75.2471 32.0393 80.8727 29.9675Z'
            fill='#00336B'
          />
          <defs>
            <clipPath id='clip0_5006_314'>
              <rect
                x='99.9526'
                y='53.873'
                width='34.4262'
                height='19.9066'
                rx='9.95328'
                transform='rotate(138.345 99.9526 53.873)'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className={`absolute hidden sm:block  bottom-[calc(142/1080*100vh)] left-[calc(665/1920*100vw)]`}
      >
        <svg
          width='88'
          height='57'
          viewBox='0 0 88 57'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='bird-5 bird opacity-0'
        >
          <g>
            <rect
              x='51.582'
              y='6'
              width='23.9071'
              height='13.824'
              rx='6.912'
              transform='rotate(23.8156 51.582 6)'
              fill='#007AFF'
            />
            <circle
              cx='55.0939'
              cy='14.747'
              r='1.3824'
              transform='rotate(23.8156 55.0939 14.747)'
              fill='white'
            />
            <circle
              cx='60.1528'
              cy='16.9798'
              r='1.3824'
              transform='rotate(23.8156 60.1528 16.9798)'
              fill='white'
            />
            <circle
              cx='65.2114'
              cy='19.2127'
              r='1.3824'
              transform='rotate(23.8156 65.2114 19.2127)'
              fill='white'
            />
          </g>
          <path
            d='M75.8787 23.8487C71.8853 21.852 61.656 27.0527 55.6527 28.4679C55.6707 28.4466 55.6887 28.4335 55.7084 28.4122C59.5511 24.0109 57.4692 20.6464 53.787 20.6464C52.0524 20.6464 50.3685 21.7521 49.0565 22.9167C46.4127 15.4622 42.5159 3.04612 34.3374 0.556363C23.2924 -2.80481 0 10.1616 0 10.1616C0 10.1616 25.2383 4.19602 27.7346 11.4818C30.7354 20.2468 33.6167 28.1714 37.2186 31.7734C32.5356 36.4564 27.3743 38.9773 32.1769 40.1779C36.9795 41.3786 42.0491 42.0469 49.0139 37.4834C58.4307 38.4171 68.8369 32.653 75.2448 37.0264C86.6027 44.7774 81.484 56.9871 81.484 56.9871C81.484 56.9871 88.0884 48.463 87.728 41.6194C87.3644 34.7758 81.1613 26.4908 75.8787 23.8487Z'
            fill='#00336B'
          />
          <defs>
            <clipPath id='clip0_5006_307'>
              <rect
                x='51.582'
                y='6'
                width='23.9071'
                height='13.824'
                rx='6.912'
                transform='rotate(23.8156 51.582 6)'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className={`absolute hidden sm:block bottom-[calc(69/1080*100vh)] right-[calc(528/1920*100vw)]`}
      >
        <svg
          width='88'
          height='57'
          viewBox='0 0 88 57'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='bird-6 bird opacity-0'
        >
          <g>
            <rect
              x='51.582'
              y='6'
              width='23.9071'
              height='13.824'
              rx='6.912'
              transform='rotate(23.8156 51.582 6)'
              fill='#007AFF'
            />
            <circle
              cx='55.0939'
              cy='14.747'
              r='1.3824'
              transform='rotate(23.8156 55.0939 14.747)'
              fill='white'
            />
            <circle
              cx='60.1528'
              cy='16.9798'
              r='1.3824'
              transform='rotate(23.8156 60.1528 16.9798)'
              fill='white'
            />
            <circle
              cx='65.2114'
              cy='19.2127'
              r='1.3824'
              transform='rotate(23.8156 65.2114 19.2127)'
              fill='white'
            />
          </g>
          <path
            d='M75.8787 23.8487C71.8853 21.852 61.656 27.0527 55.6527 28.4679C55.6707 28.4466 55.6887 28.4335 55.7084 28.4122C59.5511 24.0109 57.4692 20.6464 53.787 20.6464C52.0524 20.6464 50.3685 21.7521 49.0565 22.9167C46.4127 15.4622 42.5159 3.04612 34.3374 0.556363C23.2924 -2.80481 0 10.1616 0 10.1616C0 10.1616 25.2383 4.19602 27.7346 11.4818C30.7354 20.2468 33.6167 28.1714 37.2186 31.7734C32.5356 36.4564 27.3743 38.9773 32.1769 40.1779C36.9795 41.3786 42.0491 42.0469 49.0139 37.4834C58.4307 38.4171 68.8369 32.653 75.2448 37.0264C86.6027 44.7774 81.484 56.9871 81.484 56.9871C81.484 56.9871 88.0884 48.463 87.728 41.6194C87.3644 34.7758 81.1613 26.4908 75.8787 23.8487Z'
            fill='#00336B'
          />
          <defs>
            <clipPath id='clip0_5006_307'>
              <rect
                x='51.582'
                y='6'
                width='23.9071'
                height='13.824'
                rx='6.912'
                transform='rotate(23.8156 51.582 6)'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className={`absolute bottom-[calc(96/1080*100vh)] right-[calc(213/1920*100vw)]`}
      >
        <svg
          width='129'
          height='102'
          viewBox='0 0 129 102'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='bird-7 bird opacity-0 '
        >
          <g>
            <rect
              x='81.6606'
              y='27.1367'
              width='43.7944'
              height='19.9066'
              rx='9.95328'
              transform='rotate(-35.1175 81.6606 27.1367)'
              fill='#007AFF'
            />
            <circle
              cx='98.7842'
              cy='27.2623'
              r='1.99066'
              transform='rotate(-35.1175 98.7842 27.2623)'
              fill='white'
            />
            <circle
              cx='105.297'
              cy='22.6818'
              r='1.99066'
              transform='rotate(-35.1175 105.297 22.6818)'
              fill='white'
            />
            <circle
              cx='111.811'
              cy='18.1013'
              r='1.99066'
              transform='rotate(-35.1175 111.811 18.1013)'
              fill='white'
            />
          </g>
          <path
            d='M99.0663 51.9881C97.1577 48.5129 88.2869 39.8584 79.0918 31.3533C83.082 27.5439 88.8471 28.7705 87.2314 26.2113C84.4638 21.8299 76.4422 21.2265 70.6673 23.6639C66.0638 19.5105 61.9223 15.8368 59.2393 13.4526C49.8653 5.12038 43.7464 4.49728 26.6909 4.49728C9.63539 4.49728 0 0 0 0C3.1253 9.46043 22.1327 10.9798 33.7199 12.1513C43.316 13.1223 53.3896 22.4491 61.8633 31.2746C57.9341 34.4078 54.3528 34.9287 52.2064 36.1061C48.171 38.3193 52.9375 40.5385 60.3577 40.4088C63.2373 40.3577 66.2073 39.597 68.9002 38.5277C77.9007 46.4844 93.5567 52.281 98.3075 70.4785C103.318 89.6687 113.397 101.985 113.397 101.985C107.801 95.0839 102.479 58.2033 99.0663 51.9881Z'
            fill='#00336B'
          />
          <defs>
            <clipPath id='clip0_5006_321'>
              <rect
                x='81.6606'
                y='27.1367'
                width='43.7944'
                height='19.9066'
                rx='9.95328'
                transform='rotate(-35.1175 81.6606 27.1367)'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* flying birds */}

      {/* flying bird 1 */}
      <svg
        viewBox='0 0 1916 438'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='path absolute bottom-[calc(133/1080*100vh)] right-0 w-full h-auto opacity-0'
        preserveAspectRatio='xMidYMax meet'
      >
        <path
          id='path'
          d='M0.102295 25.0591C450.102 -68.9409 1370.1 115.059 1915.6 437.559'
          stroke='black'
        />
      </svg>

      <svg
        width='134'
        height='74'
        viewBox='0 0 134 74'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fly-right bottom-[calc(133/1080*100vh)] -right-full absolute '
      >
        <path
          d='M0.106247 71.4754C0.874796 64.9437 15.8586 43.8135 20.6605 41.3153C23.888 39.6366 36.7274 40.2971 46.5042 40.2735C46.5042 40.2597 46.4964 40.2479 46.4964 40.2342C46.5927 34.929 52.3519 35.9374 59.9214 36.871C65.3917 29.7634 72.6782 10.2352 78.8659 4.04747C86.1661 -3.25276 132.845 1.55118 132.845 1.55118C136.399 5.10499 97.4978 9.42733 90.9681 11.3477C84.4364 13.2681 78.0973 24.2185 74.6398 31.3261C71.1824 38.4337 71.7583 41.8912 75.9843 44.0042C80.2103 46.1172 85.0123 42.4671 85.9735 43.4283C86.9347 44.3895 83.6679 49.5747 75.601 52.073C67.5323 54.5693 59.2728 50.1526 55.43 48.2303C51.5873 46.3099 46.402 47.0764 36.0276 47.0764C25.6551 47.0764 20.179 54.6656 11.438 61.8676C2.70086 69.0735 -0.662303 78.0071 0.106247 71.4754Z'
          fill='#00336B'
        />
        <rect
          width='34.4263'
          height='19.9066'
          rx='9.95328'
          transform='matrix(-0.932095 -0.362213 -0.362213 0.932095 61.1522 49.5488)'
          fill='#007AFF'
        />
        <circle
          cx='1.99066'
          cy='1.99066'
          r='1.99066'
          transform='matrix(-0.932095 -0.362213 -0.362213 0.932095 51.2415 53.7335)'
          fill='white'
        />
        <circle
          cx='1.99066'
          cy='1.99066'
          r='1.99066'
          transform='matrix(-0.932095 -0.362213 -0.362213 0.932095 43.8196 50.8495)'
          fill='white'
        />
        <circle
          cx='1.99066'
          cy='1.99066'
          r='1.99066'
          transform='matrix(-0.932095 -0.362213 -0.362213 0.932095 36.3976 47.9652)'
          fill='white'
        />
      </svg>

      {/* flying bird 2 */}
      <svg
        viewBox='0 0 1921 438'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='path absolute bottom-[calc(133/1080*100vh)] right-0 w-full h-auto opacity-0'
        preserveAspectRatio='xMidYMax meet'
      >
        <path
          id='path-two'
          d='M1920.25 25.0558C1469.2 -68.9314 547.035 115.044 0.253904 437.5'
          stroke='black'
        />
      </svg>

      <svg
        width='134'
        height='74'
        viewBox='0 0 134 74'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fly-left bottom-[calc(133/1080*100vh)] -left-full absolute '
      >
        <path
          d='M132.968 71.4754C132.199 64.9437 117.216 43.8135 112.414 41.3153C109.186 39.6366 96.3468 40.2971 86.5699 40.2735C86.5699 40.2597 86.5777 40.2479 86.5777 40.2342C86.4814 34.929 80.7222 35.9374 73.1527 36.871C67.6824 29.7634 60.396 10.2352 54.2082 4.04747C46.908 -3.25276 0.228924 1.55118 0.228924 1.55118C-3.32488 5.10499 35.5763 9.42733 42.106 11.3477C48.6377 13.2681 54.9768 24.2185 58.4343 31.3261C61.8918 38.4337 61.3159 41.8912 57.0898 44.0042C52.8638 46.1172 48.0618 42.4671 47.1006 43.4283C46.1395 44.3895 49.4062 49.5747 57.4731 52.073C65.5419 54.5693 73.8014 50.1526 77.6441 48.2303C81.4869 46.3099 86.6721 47.0764 97.0465 47.0764C107.419 47.0764 112.895 54.6656 121.636 61.8676C130.373 69.0735 133.736 78.0071 132.968 71.4754Z'
          fill='#00336B'
        />
        <g clipPath='url(#clip0_5081_287)'>
          <rect
            x='71.9219'
            y='49.5488'
            width='34.4262'
            height='19.9066'
            rx='9.95328'
            transform='rotate(-21.2362 71.9219 49.5488)'
            fill='#007AFF'
          />
          <circle
            cx='84.4092'
            cy='54.868'
            r='1.99066'
            transform='rotate(-21.2362 84.4092 54.868)'
            fill='white'
          />
          <circle
            cx='91.8311'
            cy='51.9839'
            r='1.99066'
            transform='rotate(-21.2362 91.8311 51.9839)'
            fill='white'
          />
          <circle
            cx='99.253'
            cy='49.0997'
            r='1.99066'
            transform='rotate(-21.2362 99.253 49.0997)'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_5081_287'>
            <rect
              x='71.9219'
              y='49.5488'
              width='34.4262'
              height='19.9066'
              rx='9.95328'
              transform='rotate(-21.2362 71.9219 49.5488)'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BirdAnimations;
