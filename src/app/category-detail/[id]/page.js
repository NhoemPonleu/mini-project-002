"use client"
import React from 'react'
import CategoryDetail from "@/components/CategoryDetail";
async function getCategoryDetail(id){
    const res=await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
    const data=await res.json()
    return data;
}

export default async function CategoryDetail1({params}) {
    const { id } = params;
    const category = await getCategoryDetail(id);
  return (
      <div >
          <CategoryDetail
          id={category.id}
          name={category.name}
          createOn={category.createOn}
          image={category.image}

      />
      </div>

);
}
