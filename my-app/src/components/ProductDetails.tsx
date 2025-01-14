"use client"

import React , {useState} from 'react';
import Image from 'next/image';
import {urlFor} from "@/sanity/lib/image";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
// import { CartContext } from '../context/CartContext';



const ProductDetails =({product}:any)=>{

    const [index,setIndex] = useState(0);
    const { cartItems, addProduct, qty, decQty, incQty}:any = useContext(CartContext);
    return (
        <>
        <div>{product.name}</div>
        <div className='h-56 '>
        <Image
                        
                        src={urlFor(product.images[index]).url()}
                        alt={product.images}
                        width={350}
                        height={350}
                        className='object-cover mx-auto'
                    />
        </div>

        {/* bottom  */}


                 <div className='flex gap-[5px] justify-center mt-48'>
                    {product.images?.map((item:any,i:number)=>(
                        <Image
                            
                            src={urlFor(product.images[i]).url()}
                            alt={product.images[0]}
                            width={220}
                            height={100}
                            className='object-cover h-32 mx-auto border rounded-xl hover:cursor-pointer'
                            onClick={()=>setIndex(i)}
                        />
                    ))}

                </div>
        <div>{product.description}</div>


        {/* right side  */}
        <div className='flex flex-col gap-8 md:pt-32 pt-0'>
                <div className='flex flex-col gap-4'>
                    <div className='text-3xl font-bold'>{product.name}</div>
                    <div className='text-xl font-medium'>{product.price}</div>
                </div>

                <div className='flex gap-2 items-center'>
                        <h3>Quantity</h3>
                        <p className='quantity-desc flex items-center border-black'>
                            <span className='minus'
                                onClick={decQty}
                            >
                                <AiOutlineMinus />
                            </span>
                            <span className='num'>{qty}</span>
                            <span className='plus' 
                                onClick={incQty}
                            >
                                <AiOutlinePlus />
                            </span>

                        </p>
                </div>

                <button className='btn add-to-cart'
                    onClick={()=>addProduct(product,qty)}
                >
                    Add To Cart
                </button>


            </div> 



        </>
    )
}

export default ProductDetails