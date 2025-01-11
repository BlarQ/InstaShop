"use client"
import Image from "next/image";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

const homeInfo = [
  {
    id: 1,
    description: "Reach Millions of Shoppers",
    image: "/check_circle.svg"
  },
  {
    id: 1,
    description: "Easy Product Listing",
    image: "/check_circle.svg"
  },
  {
    id: 1,
    description: "Secure and Fast Payments",
    image: "/check_circle.svg"
  },
  {
    id: 1,
    description: "Boost Your Visibility",
    image: "/check_circle.svg"
  },
]

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/getstarted')
  }
  
  return (
    <div className="flex h-[100dvh] items-center justify-between flex-col py-10 px-8">
      <div className="flex items-center justify-center flex-col bg-white">

        <Image className="sm:w-60 sm:h-60" src={'/shoppingSale1.svg'} width={500} height={500} alt="Welcome Image" />


        <div className="text-center py-6 px-4 text-[#000000E5]">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-[14px] font-normal">The safest platfrom to shop from social media vendors</p>
        </div>

        <div className="bg-[#FFEAFA] p-4 border border-[#8A226F] w-full rounded-xl">
          {
            homeInfo.map((info) => (
              <div key={info.id} className="flex items-center justify-start py-1">
                <Image className="mr-4 size-6" src={info.image} width={50} height={50} alt={info.description} />
                <h2 className="text-[14px] font-medium">{info.description}</h2>
              </div>
            ))
          }
        </div>
      </div>
      
      <Button onClick={handleClick}/>
    </div>
  );
}
