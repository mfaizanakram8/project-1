import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <div className='p-3 bg-white flex justify-end gap-3'>
            <Link href="/" className='pl-3 pr-3 '>
             Home
            </Link>
            <Link href="/about" className='pl-3 pr-3 '>
              About
            </Link>
            <Link href="/address" className='pl-3 pr-3 '>
             Address
            </Link>
            <Link href="/contact" className='pl-3 pr-3 '>
              Contact
            </Link>
    </div>
  )
}

export default header;
