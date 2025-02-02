
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
