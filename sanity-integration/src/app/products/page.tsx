'use client'

// this is mahak alamgir code not working exactly file is working 







// import React,{useEffect , useState} from "react";
// import Image from "next/image";
// import { createClient } from '@sanity/client';  


// const sanity = createClient({  
//     projectId: "sq4earib",  
//     dataset: "production",  
//     apiVersion: "2025-01-26",  
//     useCdn: true,  
// });


// interface Product {
//     name: string,
//     category: string,
//     price: number,
//     description: string,
//     discountPercentage:number,
//     stockLevel: number,
//     imageUrl: string,
//     productImage:{
//         asset:{
//             _ref:string;
//         }
//     }
// }


// const ProductCards: React.FC = ()=>{
//     const [products , setProducts] = useState<Product[]>([]);
//     const [cart , setCart] = useState<Product[]>([]);

//     const fetchProducts = async () => {
//         try {
//             const query = `
//             *[type == 'product'] {
//             _id,
//             title,
//             price,
//             description,
//             discountPercentage,
//             "imageUrl": productImage.asset->url,
            
//             }`;

//             const data = await sanity.fetch(query);
//             setProducts(data);
//         }catch (error){
//             console.log("Error Fetching Products:" , error);
            
//         }
        
//     };

//     const addToCart = (product:Product) => {
//         setCart((prevCart)=> [...prevCart, product]);
//         alert (`${product.name} has been added to your cart!`)
//     };

//     useEffect (()=>{
//         fetchProducts();
//     },[])

//     return(
//         <div className="flex justify-center flex-wrap mt-5 mx-4 md:mx-48"> 
//         {products.map((product)=>(
//             <div key={product.name} className='flex flex-col m-2'> 
//             <div   className='w-60 h-40 bg-[#f6f7fb] flex justify-center items-center drop-shadow-xl'>  
//                 <Image  
//                     src={product.imageUrl}  
//                     alt="Picture of the author"  
//                     width={150}  
//                     height={150} 
//                     className="object-cover w-full " 
//                 />  
//             </div>  
//             <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500'>  
//                 <h2 className='text-[#fb2e86] font-bold leading-5'>  
//                     Cantiever chair  
//                 </h2>  
//                 <h3 className='text-[#151875] text-[0.75rem]'>{product.name}</h3>  
//                 <h3 className='text-[#151875] text-[0.75rem]'>{product.price}</h3>  
//             </div> 
            
//             // add to cart functionality 
            
//             </div>
    
//         ))}
//         </div>
//     )
    
        

// }

// export default  ProductCards 

import React, { useEffect, useState } from "react";  
import Image from "next/image";  
// import { createClient } from '@sanity/client';  
import { client } from "@/sanity/lib/client";


// const sanity = createClient({  
//     projectId: "sq4earib",  
//     dataset: "production",  
//     apiVersion: "2025-01-26",  
//     useCdn: true,  
// });  

interface Product {  
    name: string;  
    category: string;  
    price: number;  
    description: string;  
    discountPercentage: number;  
    stockLevel: number;  
    imageUrl: string;  
    productImage: {  
        asset: {  
            _ref: string;  
        }  
    };  
}  

const ProductCards: React.FC = () => {  
    const [products, setProducts] = useState<Product[]>([]);  
    // const [cart, setCart] = useState<Product[]>([]);  

    const fetchProducts = async () => {  
        try {  
            const query = `  
            *[type == 'product'] {  
                _id,  
                title,  
                price,  
                description,  
                discountPercentage,  
                "imageUrl": productImage.asset->url,  
            }`;  

            const data = await client.fetch(query);  
            setProducts(data);  
        } catch (error) {  
            console.log("Error Fetching Products:", error);  
        }  
    };  

//    const addToCart = (product: Product) => {  
//         setCart((prevCart) => [...prevCart, product]);  
//         alert(`${product.name} has been added to your cart!`);  
//     };   

    useEffect(() => {  
        fetchProducts();  
    }, []);  

    return (  
        <div className="flex justify-center flex-wrap mt-5 mx-4 md:mx-48">  
            {products.map((product) => (  
                
                
                <div  className='flex flex-col m-2'>  
                    <div className='w-60 h-40 bg-[#f6f7fb] flex justify-center items-center drop-shadow-xl'>  
                        <Image  
                            src={product.imageUrl}  
                            alt={product.name}  
                            width={150}  
                            height={150}  
                            className="object-cover w-full"  
                        />  
                    </div>  
                    <div className='w-60 h-24 bg-white flex flex-col align items-center justify-center drop-shadow-xl mb-12 hover:bg-blue-500'>  
                        <h2 className='text-[#fb2e86] font-bold leading-5'>  
                            jhbjb  
                        </h2>  
                        <h3 className='text-[#151875] text-[0.75rem]'>bbnbnbnb</h3>  
                    </div>  
                    {/* <button onClick={() => addToCart(product)}>Add to Cart</button>   */}
                </div>  
                
                
             ))}   
        </div>  
    );  
}  

export default ProductCards;