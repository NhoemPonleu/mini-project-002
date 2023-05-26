import Link from 'next/link';
import React from 'react';
import Image from "next/image";


export default function CardComponent({id,title,description,image,price}) {
    return (
    //     <div
        // className="shrink-0 my-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        // >
        //     <Link href={`/product/${id}`}>
        // <image
        //   className="p-8 rounded-t-lg"
        //   src={image ? image : "Unknown"}
        //   alt="product image"
        // />


        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image  unoptimized  width={500}  height={500} className="rounded-t-lg"
                     src={image ?image:"/images/img.png"}
                     alt=""/>

            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title?title:'Noteworthy\n' +
                        '                        technology acquisitions 2021'}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description?description:'Here are the biggest enterprise\n' +
                    '                    technology acquisitions of 2021 so far, in reverse chronological order'}.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price?price:'Unknown'}$</p>
                <a href={`/products/${id}`}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>

    );
}
