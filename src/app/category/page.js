import React from 'react'
import CardCategory from "@/components/CardCategory";

export async function getCategory() {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories?limit=13')
    const data = res.json()
    return data
}

export default async function About() {
    const categorys = await getCategory();
    console.log(categorys);
    return (
        <div className="flex min-h-screen flex-wrap items-center justify-between p-24">
            {categorys.map((categories) => (<CardCategory
                key={categories.id}
                id={categories.id}
                image={categories.image}
                name={categories.name}
                creationAt={categories.creationAt}/>))}
        </div>
    )
}
