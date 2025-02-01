// components/DataDisplay.tsx  

import  Product  from '@/sanity/schemaTypes/product'; // Adjust types as necessary  
import Image from 'next/image';  
import Link from 'next/link';  
import { urlFor } from '@/sanity/lib/image'; // Adjust as necessary  
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

const DataDisplay = ({ products }: { products: Product[]}) => {  
    if (!products || products.length === 0) {  
        return <p>No products available.</p>;  
    }  

    return (  
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">  
            {products.map((product) => {  
                const imageUrl = product?.image?.asset ? urlFor(product.image.asset).url() : '/path/to/placeholder/image.jpg';  

                return (  
                    <div key={product._id} className="bg-white h-80 w-48 drop-shadow-lg">  
                        <Link href={`/pages/product/${product.slug.current}`}> {/* Link to the product detail page */}  
                            <Image  
                                src={imageUrl}  
                                alt={product.name}  
                                width={100}  
                                height={100}  
                                className="object-cover h-32 mx-auto pt-10"  
                            />  
                            <div className="text-center flex flex-col my-8">  
                                <h2 className="text-[#595959] text-lg font-bold">{product.name}</h2>  
                                <h3 className="text-[#9c9c9c] text-[0.95rem]">${product.price}.00</h3>  
                            </div>  
                            <button className='h-7 w-24 rounded-md hover:bg-blue-400 bg-slate-900 text-white '>add to cart</button>
                        </Link>  
                    </div>  
                );  
            })}  
        </div>  
    );  
};  

export default DataDisplay;