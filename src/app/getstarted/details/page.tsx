'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import FileUpload from '../components/FileUpload';
import InputField from '../components/InputField';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter();
  const [storeName, setStoreName] = useState('');
  const [storeTagName, setStoreTagName] = useState('');
  const [storePhoneNumber, setStorePhoneNumber] = useState('');
  const [storeEmail, setStoreEmail] = useState('');
  const [category, setCategory] = useState('');
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleButtonClick = () => {
    // Validate form fields
    if (!storeName || !storeTagName || !storePhoneNumber || !storeEmail || !category || !image) {
      setUploadStatus('Please fill in all fields and upload an image.');
      return;
    }

    // Here you would typically send the data to your backend
    const formData = {
      storeName,
      storeTagName,
      storePhoneNumber,
      storeEmail,
      category,
      image,
    };

    // Replace this with your API call
    console.log('Form Data:', formData);

    // Simulate a successful submission
    setUploadStatus('Store information submitted successfully!');

    router.push('/');
  };

  return (
    <div className='flex flex-col h-[100dvh] justify-between'>
      <div>
        <Header href='/getstarted/profile' dividerColors={['#8A226F', '#8A226F', '#8A226F']} />

        {/* Upload Profile */}
        <div className='mx-4 mt-2 border rounded flex items-center justify-center h-[140px]'>
          <FileUpload onImageUpload={setImage} />
        </div>

        <div className='py-4 px-4'>
          <InputField placeholder='Store name' value={storeName} onChange={(e) => setStoreName(e.target.value)} />
          <InputField placeholder='Store tag name' value={storeTagName} onChange={(e) => setStoreTagName(e.target.value)} />
          <InputField placeholder='Store phone number' type='number' value={storePhoneNumber} onChange={(e) => setStorePhoneNumber(e.target.value)} />
          <InputField placeholder='Store email' value={storeEmail} type='email' onChange={(e) => setStoreEmail(e.target.value)} />
          <InputField placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
      </div>

      <div className='px-4 py-4 border'>
        <Button label='Continue' onClick={handleButtonClick} />
        {uploadStatus && <p className='text-red-500 mt-2'>{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default Page;