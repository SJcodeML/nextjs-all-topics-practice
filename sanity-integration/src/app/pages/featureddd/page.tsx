'use client'

import { fetchProducts } from '@/sanity/lib/fetchProducts'; 
import Image from 'next/image' ;
import DataDisplay from '@/components/Data';  
import { useEffect, useState } from 'react';
import { urlFor } from '@/sanity/lib/image';
import {MyButtonGreen} from "@/components/Button";
import {MyButton} from "@/components/Button";


interface Slug {  
    _type: "slug";  
    current: string;  
  } 
  
export interface Product {  
    _id: string; // Ensure _id is included  
    name: string; // Assuming 'title' is the field used for slug generation     
    slug: Slug;  
    category: string;  
    price: number; 
    isFeaturedProduct:boolean, 
    description: string;  
    discountPercentage: number;  
    stockLevel: number;  
    image: {  
      asset: {  
        _ref: string;  
        _type: string;  
      };  
    };  
    quantity?: number;
    
  }  

const FeaturedProductsPage =() => {  
    const [cart,setCart ] = useState<Product[]>([]) 
    
    const handleAddToCart = (product: Product) => { 
        console.log("Adding to cart:", product); 
        setCart((prevProducts) => {  
            const existingProduct = prevProducts.find(item => item._id === product._id);  
            if (existingProduct) {  
                // If the product already exists in the cart, increase the quantity  
                return prevProducts.map(item => item._id === product._id ? {...item, quantity: (item.quantity || 0) + 1} : item);  
            } else {  
                // If not, add it to the cart with quantity set to 1  
                return [...prevProducts, {...product, quantity: 1}];  
            }  
        });  
    };  

    const handleQuantityChange = (productId: string, delta: number) => {  
        setCart((prevProducts) =>   
            prevProducts.map(item =>   
                item._id === productId   
                    ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 0) }   
                    : item  
            )  
        );  
    };  

    const clearCart = () => {  
        setCart([]); // Clear the cart by resetting to an empty array  
    };  

//     const handleRemoveFromCart = (product_id:string)=>
//       {
//         const newData = cart.filter((item)=>{
//           return item._id!=product_id
//         })
//         setCart(newData)
//       } 
    
    
    const [showForm ,setShowForm] =useState(false)
    const [featuredProducts, setFeaturedProducts] = useState([]);  
    const [showcart , setShowCart] = useState(false)

    const calculateSubtotal = () => {  
        // return cart.reduce((total, item) => total + item.price * item.quantity, 0);  
        return cart.reduce((total, item) => total + item.price , 0);  
    };  

    const calculateTotal = () => {  
        const subtotal = calculateSubtotal();  
        const taxRate = 0.1; // Assuming a tax rate of 10%  
        const total = subtotal + subtotal * taxRate; // Adjust total calculation as needed  
        return total;  
    };  

    const subtotal = calculateSubtotal();  
    const total = calculateTotal();  

    useEffect (()=>{
        const fetchFeaturedProducts =async ()=> {
            try {
                const products = await fetchProducts();
                const filteredProducts=products.filter((product:Product)=>product.isFeaturedProduct);
                setFeaturedProducts(filteredProducts);
                
            } catch (error) {
                console.log("error fetching products",error);
                
                
            }
        };
        fetchFeaturedProducts();
    },[])

 
    return ( 
        
        <div>  
            <button onClick={()=>setShowCart(true)} className='h-12 w-32 bg-slate-600 text-white'>Cart</button>
            <h1>Featured Products</h1>  
            <DataDisplay products={featuredProducts} onClick ={handleAddToCart} />  
            
            {showcart &&
             
             <div className="flex justify-center  mt-20 ">
                {/* h{cart.map((item: Product) => (   */}
               
                  
                        <div className="w-[40rem] bg-white">
                            {/* nav */}
                            <th className="text-[#1d3178] flex text-[1.5rem] mb-7 font-bold">
                                <h1>Product</h1>
                                <h1 className="ml-52"> Price</h1>
                                <h1 className="ml-16"> Quantity</h1>
                                <h1 className="ml-10">Total</h1>
            
                            </th>
            
                            {/* one row of a component making it then will loop it we will have multiple rows */}
                            <div className="" >
            
                                {/* pictue card */}
            
                                <div className="">
                                        {cart.map((item: Product) => (                                          
                                        <tr key={item._id} className="shopping-cart-item my-5 border-b-2 flex gap-16 border-[#e1e1e4]">
                                            {/* Picture card */}
                                            <div className=" flex mb-5">                                            
                                                <Image
                                                src={urlFor(item.image).url()}  
                                                alt={item.name}
                                                width={85}
                                                height={85}
                                                className="shopping-cart-image mr-3 w-32 h-20"
                                                />

                                                <div className="">
                                                    <h1>{item.name}</h1>
                                                    <h3 className="text-[#a1a8c1] text-[0.8rem]">{`Color: ${item.name}`}</h3>
                                                    <h3 className="text-[#a1a8c1] text-[0.8rem]">{`Size: ${item.price}`}</h3>
                                                </div>
                                            </div>
                                            {/* price and further divs */}
                                            <div className="flex gap-20 ">
                                                {/* price */}
                                                <div className="flex gap-20 text-[#15245e] ">
                                                    {/* <span>{`$${item.price.toFixed(2)}`}</span> */}
                                                    {/* <span>{`$${item.price}`}</span> */}
                                                    <span>{`$${item.price ? Number(item.price).toFixed(2) : '0.00'}`}</span>  
                                                </div>
            
                                                {/* Quantity controls */}
                                                <div className="border-slate-950  flex">
                                                    <div className="bg-[#e7e7ef]  w-5 h-5 border-2 flex items-center justify-center"  onClick={() => handleQuantityChange(item._id, -1)}>-</div>
                                                    <div className="bg-[#f0eff2]  w-8 h-5 border-2 flex items-center justify-center">{item.quantity || 1}</div>
                                                    <div className="bg-[#e7e7ef]  w-5 h-5 border-2 flex items-center justify-center"  onClick={() => handleQuantityChange(item._id, 1)}>+</div>
                                                </div>
            
                                                {/* Total */}
                                                <div className="text-[#15245e]">
                                                    {/* <span>{`$${item.price.toFixed(2)}`}</span> */}
                                                    {/* <span>{`$${item.price}`}</span> */}
                                                    <span>{`$${item.price ? Number(item.price).toFixed(2) : '0.00'}`}</span>  
                                                </div>
                                            </div>
                                        </tr>
                                      ))}  
                               </div>
                            </div>
                            <div className="flex justify-between">
                                <MyButton label="Update Cart" onClick={clearCart}  />
                                <MyButton onClick={clearCart} label="clear Cart"/>
       

                            </div>
            
                        </div>
                        {/* rightside section */}
                         
                        <div className="w-30 ml-8">
                            <div className="text-[#1d3178] flex text-[1.5rem] mb-7 justify-center font-bold">
                                <h1>Cart Totals</h1>
                            </div>
                            <div className="bg-[#f4f4fc] p-4 m-9 rounded-sm">
                                <div className="flex justify-between leading-10 border-b-2 my-3 text-[#1d3178] border-b-[#e8e6f1]">
                                    <h3>Subtotals:</h3>
                                    <h3>${subtotal.toFixed(2)}</h3>
                                </div>
                                <div className="flex justify-between border-b-2 my-3 text-[#1d3178] border-b-[#e8e6f1]">
                                    <h3>Totals:</h3>
                                    <h3>${total.toFixed(2)}</h3>
                                   
                                </div>
                                               <ol className="list-disc list-inside text-[#8a91ab] text-[0.85rem] leading-10">
                                    <li>Shipping and taxes calculated at checkout</li>
                                </ol>
                                {/* <MyButtonGreen onClick={()=>setShowForm(true)} label="Proceed to Checkout" /> */}
                                <MyButtonGreen onClick={() => setShowForm(true)} label="Proceed to Checkout" /> 
                            </div>
            
            
                            <div className="text-[#1d3178] flex justify-center text-[1.5rem]   font-bold">
                                <h1>Calculate Shopping</h1>
                            </div>
                            <div className="bg-[#f4f4fc] p-4 m-9 rounded-sm">
                                <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">
                                    <h3>Bangladesh</h3>
            
                                </div>
                                <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1]">
                                    <h3>Mirpur Dhaka 1200</h3>
            
                                </div>
            
                                <div className="flex justify-between leading-10 border-b-2 my-3 text-[#c5cbe3] border-b-[#e8e6f1] mb-6">
                                    <h3>Postal Code</h3>
            
                                </div>
            
                                <MyButton onClick={clearCart}  label="Shopping" />
                            </div>
                            {/* ------ */}
            
                        
                        </div>
                       
                   hjkj </div>

            

             }

                    {showForm &&
                    <div className=" mt-32 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4"> Customer Information</h2>
            <div className=" mb-4">
                <label className=" block text-sm font-medium ">Name</label>
                <input 
                type ="text"
                name = "name"
                value=""//{customerinfo.name}
                // onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <div className=" mb-4">
                <label className=" block text-sm font-medium text-gray-700">Email</label>
                <input 
                type ="email"
                name = "email"
                value=""//{customerinfo.name}
                // onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <div className=" mb-4">
                <label className=" block text-sm font-medium text-gray-700">Email</label>
                <input 
                type ="phone"
                name = "phone"
                value=""//{customerinfo.name}
                // onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <button //onClick={handleCheckout} 
            className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition"
            >Submit Order</button>
            


        </div>}
            
        </div>  
        
        
    );  
};  

export default FeaturedProductsPage;


