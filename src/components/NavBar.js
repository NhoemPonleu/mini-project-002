"use client"
import Link from 'next/link'
import React from 'react'
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function NavBar() {
    const pathName=usePathname();
    console.log(pathName);
  return (
    
    <div>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center">
            <Image  unoptimized  width={30}  height={250} src="https://istad.co/resources/img/logo_md.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Product</Link>
                </li>
                <li>
                    <Link href="/category" className="text-gray-900 dark:text-white hover:underline">Category</Link>
                </li>
                <li>
                    <Link href="/produ" className="text-gray-900 dark:text-white hover:underline">Add New Product </Link>
                </li>
                <li>
                    <a href="/dashboard/setting" className="text-gray-900 dark:text-white hover:underline">setting</a>
                </li>
                <li>
                    <a href="/user" className="text-gray-900 dark:text-white hover:underline">User</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}
