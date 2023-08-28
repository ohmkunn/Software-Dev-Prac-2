import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src='/cover.jpg' alt='cover' fill={true} objectFit='cover' />
      <div className={styles.bannerText}>
        <h1>ยินดีต้อนรับสู่การฉีดวัคซีน</h1>
        <h3>ท่านมาเราดีใจท่านจากไปเราก็ดีใจ</h3>
      </div>
    </div>
  )
}
