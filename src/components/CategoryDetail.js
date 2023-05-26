import React from 'react';
import Image from "next/image";

function CategoryDetail({id,image,name,createOn}) {
    return (
        // <div className="flex min-h-screen flex-wrap items-center justify-between p-24">
        //     <a href="#"
        //        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        //     >
        //         {image && (
        //             <Image  unoptimized  width={500}  height={500}
        //                 className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        //                 src={image[0]}
        //                 alt=""
        //             />
        //         )}
        //         <div className="flex flex-col justify-between p-4 leading-normal">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        //                 {name ? name : "Loading..."}
        //             </h5>
        //             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        //                 {creationAt ? creationAt : "Loading..."}
        //             </p>
        //         </div>
        //     </a>
        // </div>
    <>
        <div className="container"></div>
        <div className="col-md-6">
            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">{id}</strong>
                    <h3 className="mb-0">{name}</h3>
                    <div className="mb-1 text-muted">{createOn}</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                        additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                   <Image  unoptimized  width={500}  height={500} src={image} alt={"aa"}/>

                </div>
            </div>
        </div>


    </>
    );
}

export default CategoryDetail;