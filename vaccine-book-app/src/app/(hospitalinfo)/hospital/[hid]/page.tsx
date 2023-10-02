import Image from 'next/image'
import React from 'react'

export default function page({params}: {params: {hid: string}}) {
  
  // mock Data for Demonstration
  const mockHosRepo = new Map()
  mockHosRepo.set("001",{name:'Chulalongkorn Hospital', image:'/chula.jpg'})
  mockHosRepo.set("002",{name:'Rajavithi Hospital', image:'/rajavithi.jpg'})
  mockHosRepo.set("003",{name:'Thammasat University Hospital' ,image:'/thammasat.jpg'})

  return (
    <main className='text-center p-5'>
        <h1 className='text-center text-xl font-medium'>Hospital ID {params.hid}</h1>
    <div className='flex flex-row my-5'>
      <Image src={(mockHosRepo.get(params.hid)).image} alt="Hos picture"
      width={0} height={0} sizes='100vw' className='round-lg w-[30%] bg-black'/>
    <div className='text-md mx-5'>{(mockHosRepo.get(params.hid)).name}</div>
    </div>
    </main>
  )
}
