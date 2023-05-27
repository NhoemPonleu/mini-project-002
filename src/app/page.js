
import CardComponent from "@/components/Card";
import {getData} from "@/app/fetchdata/getapi";


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


export default async function Home() {
  const pro=await getData()
  console.log(pro);
  return (
      <div>
            {/*<SlayComponent/>*/}

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
