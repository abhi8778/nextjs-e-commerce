import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/Banner";
import FeaturedProductListing from "./components/FeaturedProduct";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/login"}>Login</Link>
      
    </div>
  );
}
