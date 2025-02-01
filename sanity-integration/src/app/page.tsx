
import Image from "next/image";
import { groq} from "next-sanity";
import { client} from "@/sanity/lib/client";
import Link from "next/link";







export default async function Home() {
  // const products = await client.fetch(groq `*[_type=='product']`)
 
  
  return (
  <div>
    
  <Link href="/exactly">Products
  </Link> <br/> 
  <Link href="/pages/featureddd">featured products
  </Link>  <br/> 
  <Link href="/pages/order">order products
  </Link>  
  
  </div>
  );
}
