import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import styles  from "./topmenu.module.css";
import Image from 'next/image'
import {getServerSession} from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
 export default async function TopMenu () {
    const session = await getServerSession(authOptions)
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-950 p-3">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            {
                session? <Link href="/api/auth/signout" className="text-sm lg:flex-grow">
                            <div className="inline-block text-sm px-4 py-2 leading-none border rounded font-bold text-teal-800 bg-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-4 lg:mt-0">
                                Sign-Out of {session.user?.name}
                            </div>
                        </Link>
                        :<Link href="/api/auth/signin" className="text-sm lg:flex-grow">
                            <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                Sign-In
                            </div>
                        </Link>
            }
                <div className="flex items-center ml-4">
                    <TopMenuItem title="Booking" pageRef="/booking"/>
                </div>
            </div>
            <div className="flex items-center flex-shrink-0 text-white ml-6">
                <Link href={'./' }> <span className="font-semibold text-xl tracking-tight">VACCINE</span></Link>
                <Link href={'./' }>
                    <Image src={'/logo.png'}
                        className="fill-current h-10 w-10 ml-2"
                        alt='logo' width={0} height={0} sizes="100vh"/></Link>
            </div>
        </nav>
    )
}