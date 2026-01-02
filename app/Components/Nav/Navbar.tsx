import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-center pt-10 px-5'>
      <nav className='max-w-[1200px] w-full flex justify-between items-center py-5 px-6 bg-white rounded-full '>
        <div>
          <Image
            src='/Coup.svg'
            alt='Coup.'
            width={107}
            height={34}
            className='w-[107px] h-[34px] object-center object-cover'
          />
        </div>

        <div className=' gap-4 text-gray-500 leading-[22px] hidden md:flex'>
          <Link href={'/'} className='px-3 py-2 font-medium'>
            How it Works
          </Link>
          <Link href={'/'} className='px-3 py-2 font-medium'>
            Pricing
          </Link>
          <Link href={'/'} className='px-3 py-2 font-medium'>
            Use Case
          </Link>
          <Link href={'/'} className='px-3 py-2 font-medium'>
            FAQ
          </Link>
        </div>

        <Button text='Contact Sales' style='!leading-[17px]' />
      </nav>
    </div>
  );
};

export default Navbar;
