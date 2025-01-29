// lib/fetchProducts.ts  

import {client} from '@/sanity/lib/client'; // Adjust the import according to your file structure  
import groq from 'groq';  

// Function to fetch all products  
export const fetchProducts = async () => {  
    const products = await client.fetch(groq`*[_type == "product"]{..., slug}`); // Adjust fields as necessary  
    return products;  
};