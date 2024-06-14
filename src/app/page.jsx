import styles from "./page.module.css";
import Link from "next/link"; 
import Image from "next/image"; 

import logo from '../../public/lanche.jpeg'

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <div>
        <Image src='/home/lanche.jpeg' width={100} height={100}/>
      </div>
      <Link  href={"/carrinho"}>Carrinho</Link>
    </div>
  );
}

