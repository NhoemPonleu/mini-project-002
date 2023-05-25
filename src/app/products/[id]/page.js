"use client"
import React from 'react'
import ProductDetail from "@/components/ProductDetail";
async function getProductDetail(id){
    const res=await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data=await res.json()
    return data;
}
export default async function ProductDetail1({params}) {
    const { id } = params;
    const product1 = await getProductDetail(id);
    return (
        <div>
            <ProductDetail
                id={product1.id}
                title={product1.title}
                description={product1.description}
                price={product1.price}
                image={product1.images}
            />
        </div>
    );
}
