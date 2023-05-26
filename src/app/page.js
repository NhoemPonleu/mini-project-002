"use client"
import CardComponent from "@/components/Card";
import SlayComponent from "@/components/SlayComponent";


export const metadata = {
  title: 'Product',
  description: "desc",
  locale: 'en-US',
  category: 'product',
  type: 'website',
  siteName: 'webapp',
  manifest: '/manifest.json',
  openGraph:{
    title: 'List-Product',
    description: "desc",
    url: '/',
    siteName: 'webapp',
    images: [
      {
        url: "/img_1.png",
        width: 800,
        height: 600,
      },
    ]
  },
}

export async function getData(){
  const res=await fetch(`https://api.escuelajs.co/api/v1/products?limit=10&offset=12`)
  const data=res.json()
  return data
}
export default async function Home() {
  const pro=await getData()
  console.log(pro);
  return (
      <div>
            <SlayComponent/>

    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      {pro.map((product)=>(<CardComponent
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.images[0]}
          price={product.price}/>))}
    </main>
      </div>
  )
}
