import styles from './topmenu.module.css'
import Link from 'next/link';
export default function TopMenuItem ({title, pageRef} :{title:string, pageRef:string}  ) {
    return (
        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" href={pageRef}>
        {title}
        </Link>
    );
}
