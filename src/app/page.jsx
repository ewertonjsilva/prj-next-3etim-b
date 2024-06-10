import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link  href={"/carrinho"}>Carrinho</Link>
    </div>
  );
}

