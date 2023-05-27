export async function getData(){
    const res=await fetch(`https://api.escuelajs.co/api/v1/products?limit=10&offset=12`)
    const data=res.json()
    return data
}