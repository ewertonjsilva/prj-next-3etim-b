import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Links</h1>
      <p className={styles.linkTemp}><Link  href={"/"}>Home</Link></p>
      <p className={styles.linkTemp}><Link  href={"/carrinho"}>Carrinho</Link></p>
      <p className={styles.linkTemp}><Link  href={"/enderecos/cadastrar"}>Cadastrar endereços</Link></p>
      <p className={styles.linkTemp}><Link  href={"/enderecos/listar"}>Listar endereços</Link></p>
      <p className={styles.linkTemp}><Link  href={"/ingredientes/cadastrar"}>Cadastrar ingredientes</Link></p>
      <p className={styles.linkTemp}><Link  href={"/ingredientes/listar"}>Listar ingredientes</Link></p>
      <p className={styles.linkTemp}><Link  href={"/pedidos/cadastrar"}>Cadastrar pedidos</Link></p>
      <p className={styles.linkTemp}><Link  href={"/pedidos/listar"}>Listar pedidos</Link></p>
      <p className={styles.linkTemp}><Link  href={"/produtos/cadastrar"}>Cadastrar produtos</Link></p>
      <p className={styles.linkTemp}><Link  href={"/produtos/listar"}>Listar produtos</Link></p>
      <p className={styles.linkTemp}><Link  href={"/usuarios/cadastrar"}>Cadastrar usuarios</Link></p>
      <p className={styles.linkTemp}><Link  href={"/usuarios/listar"}>Listar usuarios</Link></p>
      <p className={styles.linkTemp}><Link  href={"/usuarios/login"}>Login</Link></p>
      <p className={styles.linkTemp}><Link  href={"/usuarios/recsenha"}>Recuperação de senha</Link></p>    
    </div>
  );
}

