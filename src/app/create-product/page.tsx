"use client";
import React, { useRef, useState } from 'react';
import ProductHeader from './components/ProductHeader';
import Image from 'next/image';
import InputField from '../getstarted/components/InputField';
import AutocompleteTextarea from './components/AutoComplete';

const suggestions = [
  'Product A',
  'Product B',
  'Product C',
  'Product D',
  'Product E',
];

const Page: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [productTitle, setProductTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number | ''>('');
  const [oldPrice, setOldPrice] = useState<number | ''>('');
  const [inventoryStocks, setInventoryStocks] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // State to hold selected files

  const handleClick = () => {
    inputRef.current?.click(); // Trigger the click event of the hidden input
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray); // Update state with selected files
      console.log('Selected files:', fileArray);
    }
  };

  return (
    <div>
      <ProductHeader />
      <div className='flex items-center justify-between px-4 py-4'>
        <h1 className='text-sm font-medium'>Basic details</h1>
        <Image src={'/chevron_down.svg'} alt='Arrow down' width={20} height={20} />
      </div>

      {/* Product details */}
      <div className='px-4 text-sm pb-2'>
        <InputField 
          type='text' 
          placeholder='Product Title' 
          value={productTitle} 
          onChange={(e) => setProductTitle(e.target.value)} 
        />
        <textarea 
          className='border border-[#00000033] h-20 rounded-xl w-full px-4 py-2' 
          name="description" 
          id="description" 
          placeholder='Product Description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <div className='grid grid-cols-2 gap-2 py-2'>
          <InputField 
            type='number' 
            placeholder='Price' 
            value={price} 
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')} 
          />
          <InputField 
            type='number' 
            placeholder='Old Price' 
            value={oldPrice} 
            onChange={(e) => setOldPrice(e.target.value ? Number(e.target.value) : '')} 
          />
        </div>
        <AutocompleteTextarea suggestions={suggestions} />
        <InputField 
          type='text' 
          placeholder='Inventory stocks' 
          value={inventoryStocks} 
          onChange={(e) => setInventoryStocks(e.target.value)} 
        />
      </div>

      {/* Product images */}
      <div className='flex items-center justify-between px-4 py-3 border-t'>
        <h1 className='text-sm font-medium'>Product images</h1>
        <Image src={'/chevron_down.svg'} alt='Arrow down' width={20} height={20} />
      </div>

      <div className='pb-5'>
        <div
          className='flex items-center text-[#8A226F] text-sm font-medium justify-center gap-2 py-3 bg-[#00000008] rounded-full mx-4 cursor-pointer'
          onClick={handleClick} // Trigger the input click
        >
          <p>Add Images</p>
          <Image src={'/Icon.svg'} height={20} width={20} alt='Product Images' />
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          title='Input'
          onChange={handleFileChange}
          ref={inputRef}
          className='hidden'
        />
        {/* Optional: Display selected image previews */}
        <div className='flex flex-wrap gap-2 mt-2 px-4'>
          {selectedFiles.map((file, index) => (
            <div key={index} className='relative w-20 h-20'>
              <Image
                src={URL.createObjectURL(file)} // Create a URL for the file
                alt={`Uploaded image ${index + 1}`}
                width={80}
                height={80}
                className='rounded-md'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='text-sm p-4 space-y-4 border'>
        <p className='font-medium'>Inventory variations</p>
        <div className='flex items-center justify-center gap-2 px-4 text-[#00000099]'>
          <input type='checkbox' id='variant1' name='variant' />
          <label htmlFor='variant1'>This product is variable; has different colors, sizes, weight, materials, etc.</label>
        </div>
      </div>

      <div className='px-4 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-sm font-medium'>Shipping</h1>
          <Image src={'/chevron_down.svg'} alt='Arrow down' width={20} height={20} />
        </div>

        <div className='text-xs py-4 space-y-4 px-1'>
          <div className='flex items-center justify-between'>
            <label htmlFor='self_shipping'>Self shipping</label>
            <input type="checkbox" name="self_shipping" title='Self shipping' id="self_shipping" />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor='InstaShop_shipping'>InstaShop shipping</label>
            <input type="checkbox" name="InstaShop_shipping" title='InstaShop shipping' id="InstaShop_shipping" />
          </div>
          <InputField placeholder='Inventory stocks' className='text-sm' />
        </div>
      </div>
    </div>
  );
};

export default Page;