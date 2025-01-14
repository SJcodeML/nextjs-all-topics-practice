// "use client"


// import ProductDetails from "@/components/ProductDetails";
// import {useParams } from "next/navigation";
// import {client} from "@/sanity/lib/client";
// import {groq} from "next-sanity";


// const page = async ()=>{
//     const {slug} :any =useParams();
//     const products = await client.fetch(groq `*[_type=="product"]`)
//     const product = products.find((product:any)=>product.slug.current == slug)
//     console.log(product)

//     return (
//         <>
//         <ProductDetails product={product}/>
        
        
//         </>
//     )
// }



// src/app/products/[slug]/page.tsx  
import ProductDetails from "@/components/ProductDetails";  
import { client } from "@/sanity/lib/client";  
import { groq } from "next-sanity";  

const query = groq`*[_type=="product"]`;  

const Page = async ({ params }:any) => {  
    const { slug } = params; // Get the slug from the params  
    const products = await client.fetch(query);  
    const product = products.find((product:any) => product.slug.current === slug);  

    // If the product is not found, you can handle this case  
    if (!product) {  
        return <div>Product not found</div>; // You can customize this message or render a 404 page  
    }  

    return (  
        <>  
            <ProductDetails product={product} />  
        </>  
    );  
};  

export default Page;