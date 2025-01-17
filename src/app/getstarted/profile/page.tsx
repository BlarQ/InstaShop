"use client"
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import InputField from '../components/InputField'
import Button from '@/app/components/Button'
import { useRouter } from 'next/navigation'

const socials = [
  { id: 1, name: 'Instagram', icon: '/Instagram.svg' },
  { id: 2, name: 'TikTok', icon: '/TikTok.svg' },
  { id: 3, name: 'Google', icon: '/Google.svg' },
]

const Page = () => {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/getstarted/details')
  }

  return (
    <div className='flex flex-col justify-between h-[100dvh]'>
      <div>
        <Header href='/getstarted' dividerColors={["#8A226F", '#8A226F', '#0000001A']} />
        <div className='px-4 py-2 flex items-start justify-start flex-col gap-4'>
          <h1 className='text-2xl font-medium text-[#000000E5]'>Complete profile setup</h1>

          <p className='text-[#00000099]'>Connect your socials for quick setup</p>
        </div>

        <div className='grid grid-cols-3 gap-1 px-4 py-2'>
          {
            socials.map(social => (
              <div key={social.id} className='bg-[#00000008] flex items-center justify-center h-14 rounded-xl w-full'>
                <Image src={social.icon} alt={social.name} width={50} height={50} className='w-6 h-6' />
              </div>
            ))
          }
        </div>

        <p className='text-[#00000099] px-4 py-2'>
          Or enter manually
        </p>

        <div className='px-4'>
          <InputField placeholder='Full name' />
          <InputField placeholder='Username' />
          <InputField placeholder='Phone number' type='number' />
          <InputField placeholder='Email' type='email' />
        </div>
      </div>

      <div className='px-4 py-4 border'>
        <Button label='Continue' onClick={handleContinue}/>
      </div>
    </div>
  )
}

export default Page