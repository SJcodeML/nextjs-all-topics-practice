import Hero from "@/components/Hero";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";

export default async function Home() {
const products = await client.fetch(groq `*[_type=="product"]`)
console.log(products)

  return (
    <>
    <Hero/>
    </>
  );
}
