"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navebar = () => {
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false)

    return (
        <nav className='bg-blue-950 text-white' >
            <div className='flex justify-between textc items-center px-4 md:h-16 flex-col md:flex-row text-4xl font-bold ' >
                <Link href={"/"}>
                    <div >DONATING SITE</div>
                </Link>
            
                <div className='relative '>
                    {session && <> <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={()=>{setTimeout(()=>{setshowdropdown(false)},100)}} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2" type="button">Welcome {session.user.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                        <div id="dropdownDelay" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[40px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                                </li>
                                
                                <li>
                                    <Link onClick={() => signOut() } href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                </li>
                            </ul>
                        </div></>
                    }



                    {session && <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 h-10" onClick={() => { signOut() }}>Log-Out</button>
                    }
                    {!session && <Link href={"/login"}>
                        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Log-In</button>
                    </Link>
                    }

                </div>
            </div>

        </nav>
    )
}

export default Navebar
