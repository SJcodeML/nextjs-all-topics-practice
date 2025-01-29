
import { client } from "@/sanity/lib/client";  
import { groq } from "next-sanity";  
import { urlFor } from "@/sanity/lib/image"; 
import Link from "next/link"
import Image from "next/image";

const slugify = require('slugify');  
interface Slug {  
  _type: "slug";  
  current: string;  
}  

interface Product {  
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
}  



import  {fetchProducts} from '@/sanity/lib/fetchProducts'; // Adjust according to your structure  

// const DataDisplay = async () => {  
//     const products = await fetchProducts(); 
//     if (!products || products.length === 0) {  
//         return <p>No products available.</p>; // Handle empty state  
//     }  

//     return (  
//         <div className="bg-[#f8f8f8] h-[36rem] mt-96 flex">  
//             <div className="flex justify-center flex-col mx-56 gap-6">  
//                 <h1 className="font-urban text-2xl font-semibold">Best Selling Products</h1>  
//                 <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4">  
                    
//                     {products.map((product: Product, index: number) => {  
                       
//                         const imageUrl = product?.image?.asset ? urlFor(product.image.asset).url() : null; 
//                          console.log('Image URL:', imageUrl); // Log the image URL 
//                          console.log('Fetched products:', JSON.stringify(products, null, 2)); 
                         

//                         return (  
                          
//                             <div  key={index}className="bg-white h-64 w-48 drop-shadow-lg"> 
//                             <Link key={index} href={`/product/${product.slug?.current}`}>
                            
//                                <Image  
//                                     src={imageUrl || '/path/to/placeholder/image.jpg'}  
//                                     alt="this is an image of chair" 
//                                     width={100}  
//                                     height={100}  
//                                     className="object-cover h-32 mx-auto pt-10"  
//                                 />   
//                                 <div className="text-center flex flex-col my-8">  
//                                <h2 className="text-[#595959] text-lg font-bold">{product.name}</h2>
                               
                          
//                              <h3 className="text-[#9c9c9c] text-[0.95rem]">${product.price}.00</h3> 
//                                 </div>  
//                                 </Link> 
//                             </div> 
                           
//                         );  
//                     })}  
                    
//                 </div>  
//             </div>  
//         </div>  
//     );  
// }



// export default DataDisplay; 
// THIS IS FOR SPECIAL IS FEATURED PRODUCTS AND ALSO ONE PICTURE 



 

const DataDisplay = async () => {  
    const products = await fetchProducts();  
    if (!products || products.length === 0) {  
        return <p>No products available.</p>; // Handle empty state  
    }  

    // Filter for featured products  
    const featuredProducts = products.filter((product: Product) => product.isFeaturedProduct);  

    // Check if there are any featured products  
    if (featuredProducts.length === 0) {  
        return <p>No featured products available.</p>; // Handle case where there are no featured products  
    }  

    // Select the first featured product  
    const featuredProduct = featuredProducts[3];  

    const imageUrl = featuredProduct?.image?.asset ? urlFor(featuredProduct.image.asset).url() : '/path/to/placeholder/image.jpg';  

    return (  
        <div className="bg-[#f8f8f8] h-[36rem] mt-96 flex">  
            <div className="flex justify-center flex-col mx-56 gap-6">  
                <h1 className="font-urban text-2xl font-semibold">Featured Product</h1>  
                <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4">  
                    <div className="bg-white h-64 w-48 drop-shadow-lg">  
                        <Link href={`/product/${featuredProduct.slug?.current}`}>  
                            <Image  
                                src={imageUrl}  
                                alt={`Image of ${featuredProduct.name}`}  
                                width={100}  
                                height={100}  
                                className="object-cover h-32 mx-auto pt-10"  
                            />  
                            <div className="text-center flex flex-col my-8">  
                                <h2 className="text-[#595959] text-lg font-bold">{featuredProduct.name}</h2>  
                                <h3 className="text-[#9c9c9c] text-[0.95rem]">${featuredProduct.price}.00</h3>  
                            </div>  
                        </Link>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default DataDisplay;
