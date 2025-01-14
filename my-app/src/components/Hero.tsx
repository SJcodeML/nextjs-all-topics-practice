
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import Card from "@/components/Card";




export default async function Hero (){
    const products = await client.fetch(groq `*[_type=="product"]`)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6"> 
              
              {products.map((product:any,index:number)=>(
               <Card key={index} product={product} />

              ))}
              
             
        </div>
    )
}