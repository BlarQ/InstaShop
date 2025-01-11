import Link from 'next/link';
import React from 'react'
import { FaCheck } from "react-icons/fa6";

const ProductLowHead = () => {
  return (
    <div className='flex items-center justify-between px-4 border-b pb-2'>
        <div className='flex items-center justify-between text-xs gap-2 py-1 px-2 border rounded-full'>
            <p>Draft</p>
            <p>
            <FaCheck size={12}/>
            </p>
        </div>

        <div>
          <Link className='text-[#8A226F] text-xs font-medium' href={'/'}>Preview product</Link>
        </div>
    </div>
  )
}

export default ProductLowHead