import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='block p-1 m-0 w-screen relative shadow-lg' style={{height:"70vh"}}>
      <Image src='/cover.jpg' alt='cover' fill={true} className='object-cover'/>
        <div className={styles.bannerText}>
          <h1 className='text-4xl font-medium'>ยินดีต้อนรับสู่การฉีดวัคซีน</h1>
          <h3 className='text-xl font-serif'>ท่านมาเราดีใจท่านจากไปเราก็ดีใจ</h3>
        </div>
    </div>
  )
}
