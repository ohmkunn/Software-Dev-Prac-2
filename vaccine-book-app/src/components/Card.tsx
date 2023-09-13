import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({ Name, imgSrc} : {Name: string, imgSrc:string}) {
    return (
    <InteractiveCard> 
        <div className='w-full h-[70%] relative rounded-t-lg'>
            <Image src={imgSrc}
                alt='hospitalPicture'
                fill={true}
                objectFit='cover'
                className='rounded-t-lg'/>
        </div>
        <div className='w-full h-[30%] p-[10px]'>
            <h3 className='font-semibold'>{Name}</h3>
            <p>click for more detail.</p>
        </div>
    </InteractiveCard>
    )
}
