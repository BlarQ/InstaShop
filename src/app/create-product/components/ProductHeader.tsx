import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProductLowHead from './ProductLowHead';
import { CiMenuKebab } from "react-icons/ci";


interface ProductHeaderProps {
  href?: string;
  title?: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ href = '/', title = 'Create a product' }) => {
  return (
    <>
      <div className='flex items-center justify-between'>

        <div className='flex items-center justify-start py-2'>
          <Link href={href}>
            <Image src={'/backicon.svg'} width={50} height={50} alt='Go Back' />
          </Link>
          <p className='font-medium text-base'>{title}</p>
        </div>

        <div className='px-4'>
          <CiMenuKebab />
        </div>
      </div>

      <ProductLowHead />
    </>
  );
}

export default ProductHeader;