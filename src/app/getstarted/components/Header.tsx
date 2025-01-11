import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ColoredDivider from './ColorDivider';

interface HeaderProps {
  href?: string;
  dividerColors?: string[];
}

const Header: React.FC<HeaderProps> = ({ href = '/', dividerColors = ['#8A226F', '#0000001A', '#0000001A'] }) => {
  return (
    <>
      <div className='flex items-center justify-start py-2'>
        <Link href={href}>
          <Image src={'/backicon.svg'} width={50} height={50} alt='Go Back' />
        </Link>
        <p className='font-medium text-base'>Get Started</p>
      </div>

      <ColoredDivider colors={dividerColors} />
    </>
  );
}

export default Header;