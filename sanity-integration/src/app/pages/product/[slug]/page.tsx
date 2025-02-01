import  {fetchProducts} from '@/sanity/lib/fetchProducts'; // Adjust according to your structure  
import Image from 'next/image';  
import { urlFor } from '@/sanity/lib/image'; // Adjust as necessary  

const ProductPage = async ({ params }: { params: { slug: string } }) => {  
    const products = await fetchProducts(); // Fetch all products once and store them in a constant  
    const product = products.find((prod:any) => prod.slug.current === params.slug); // Find the specific product by slug  

    if (!product) {  
        return <p>Product not found.</p>; // Handle case where product is not found  
    }  

    const imageUrl = product.image?.asset ? urlFor(product.image.asset).url() : '/path/to/placeholder/image.jpg';  

    return (  
        <div className="flex flex-col items-center bg-[#f8f8f8] p-6">  
            <h1 className="text-2xl font-bold">{product.name}</h1>  
            <Image  
                src={imageUrl}  
                alt={product.name}  
                width={300}  
                height={300}  
                className="object-cover my-4"  
            />  
            <h3 className="text-[#9c9c9c] text-lg">${product.price}.00</h3>  
            <p className="text-[#595959] mt-4">{product.description}</p>  
        </div>  
    );  
};  

export default ProductPage;



// for practise 

// interface Slug {  
//     _type: "slug";  
//     current: string;  
//   }  
// interface Product {  
//     _id: string; // Ensure _id is included  
//     name: string; // Assuming 'title' is the field used for slug generation  
//     slug: Slug;  
//     category: string;  
//     price: number; 
//     isFeaturedProduct:boolean, 
//     description: string;  
//     discountPercentage: number;  
//     stockLevel: number;  
//     image: {  
//       asset: {  
//         _ref: string;  
//         _type: string;  
//       };  
//     };  
//   }  


// import { useRouter } from 'next/router';  
// import { fetchProducts } from '@/sanity/lib/fetchProducts'; // Import your fetch function  
// import Image from 'next/image';  
// import { urlFor } from '@/sanity/lib/image'; // Adjust as necessary  
 

// const ProductDetailPage = async () => {  
//     const router = useRouter();  
//     const { slug } = router.query; // Get the slug from the route parameter  
//     if (!slug) {  
//         return <p>Loading...</p>; // Handle loading state  
//     }  

//     const products = await fetchProducts(); // Fetch all products  
//     const product = products.find((prod:Product) => prod.slug.current === slug); // Find the product by slug  

//     if (!product) {  
//         return <p>Product not found.</p>; // Handle case where product is not found  
//     }  

//     const imageUrl = product?.image?.asset ? urlFor(product.image.asset).url() : '/path/to/placeholder/image.jpg';  

//     return (  
//         <div>  
//             <h1>{product.name}</h1>  
//             <Image  
//                 src={imageUrl}  
//                 alt={product.name}  
//                 width={300}  
//                 height={300}  
//             />  
//             <h3>${product.price}</h3>  
//             <p>{product.description}</p>  
//         </div>  
//     );  
// };  

// export default ProductDetailPage;