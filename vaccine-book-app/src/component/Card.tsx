import styles from './card.module.css'
import Image from 'next/image'

export default function Card() {
    return (
    <div className={styles.card}>
        <div className={styles.cardimg}>
            <Image src={'/card.jpg'}
                alt='Product Picture'
                fill={true}
                objectFit='cover'/>
        </div>
        <div className={styles.cardtext}>
            <h3>Vaccines Save Lives</h3>
            <p>Vaccines are one of the most effective public health tools. They prevent millions of deaths 
                every year by protecting individuals and communities from serious diseases.</p>
        </div>
        
    </div>
    )
}
