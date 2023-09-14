'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
  const covers = ['/coverphoto/cover.jpg','/coverphoto/cover2.jpg','/coverphoto/cover3.jpg','/coverphoto/cover4.jpg']
  const [index, setIndex] = useState(0)
  return (
    <div className='block p-1 m-0 w-screen relative shadow-lg' style={{height:"70vh"}} onClick={()=>setIndex(index+1)}>
      <Image src={covers[index%4]} alt='cover' fill={true}/>
        <div className={styles.bannerText}>
          <h1 className='text-4xl font-medium'>ยินดีต้อนรับสู่การฉีดวัคซีน</h1>
          <h3 className='text-xl font-serif'>ท่านมาเราดีใจท่านจากไปเราก็ดีใจ</h3>
        </div>
    </div>
  )
}
