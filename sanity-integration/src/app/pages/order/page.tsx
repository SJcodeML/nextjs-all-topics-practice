// pages/featured.tsx  

import { fetchProducts } from '@/sanity/lib/fetchProducts';  
import DataDisplay from '@/components/Data';  
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

const FeaturedProductsPage = async () => {  
    const products = await fetchProducts();  
    const featuredProducts = products.filter((product: Product) => product.isFeaturedProduct);  

    return (  
        <div>  
            <h1>Featured Products</h1>  
            <DataDisplay products={products} />  
        </div>  
    );  
};  

export default FeaturedProductsPage;