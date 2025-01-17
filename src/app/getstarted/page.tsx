'use client'
import React, { useState } from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import Button from '../components/Button'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [emailPhone, setEmailPhone] = useState<string>('')

  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/getstarted/profile')
  }

  return (
    <div className='flex flex-col justify-between h-[100dvh]'>
      <div>

      <Header />
      <div className='px-4 py-2 flex items-start justify-start flex-col gap-4'>
        <h1 className='text-2xl font-medium text-[#000000E5]'>Enter your phone number or email to get started</h1>

        <p className='text-[#00000099]'>We will send you a verification code for confirmation</p>
      </div>

      <div className='px-4 py-4'>
        <InputField 
          placeholder='Enter Phone number or Email' 
          value={emailPhone} 
          onChange={(e) => setEmailPhone(e.target.value)}
        />
      </div>
      </div>

      <div className='px-4 py-4 border'>
        <Button type='submit' label='Continue' onClick={handleButtonClick}/>
      </div>
    </div>
  )
}

export default Page