import React from 'react'
import ProductHeader from './components/ProductHeader'
import Image from 'next/image'
import InputField from '../getstarted/components/InputField'
import AutocompleteTextarea from './components/AutoComplete'

const suggestions = [
  'Product A',
  'Product B',
  'Product C',
  'Product D',
  'Product E',
];

const Page = () => {
  return (
    <div>
      <ProductHeader />
      <div className='flex items-center justify-between px-4 py-4'>
        <h1 className='text-sm font-medium'>Basic details</h1>

        <Image src={'/chevron_down.svg'} alt='Arrow down' width={20} height={20} />
      </div>

      {/* product details */}
      <div className='px-4 text-sm'>
        <InputField type='text' placeholder='Product Title'/>
        <textarea className='border border-[#00000033] h-20 rounded-xl w-full px-4 py-2' name="description" id="description" placeholder='Product Description'></textarea>
        <div className='grid grid-cols-2 gap-2 py-2'>
        <InputField type='number' placeholder='Price'/>
        <InputField type='number' placeholder='Old Price'/>
        </div>
        {/* change */}
        <AutocompleteTextarea suggestions={suggestions}/>
        <InputField type='text' placeholder='Inventory stocks'/>
      </div>
    </div>
  )
}

export default Page