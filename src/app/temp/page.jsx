import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Links</h1>
      <Link  href={"/"}><p className={styles.linkTemp}>Home</p></Link>
      <Link  href={"/carrinho"}><p className={styles.linkTemp}>Carrinho</p></Link>
      <Link  href={"/enderecos/cadastrar"}><p className={styles.linkTemp}>Cadastrar endereços</p></Link>
      <Link  href={"/enderecos/listar"}><p className={styles.linkTemp}>Listar endereços</p></Link>
      <Link  href={"/ingredientes/cadastrar"}><p className={styles.linkTemp}>Cadastrar ingredientes</p></Link>
      <Link  href={"/ingredientes/listar"}><p className={styles.linkTemp}>Listar ingredientes</p></Link>
      <Link  href={"/pedidos/cadastrar"}><p className={styles.linkTemp}>Cadastrar pedidos</p></Link>
      <Link  href={"/pedidos/listar"}><p className={styles.linkTemp}>Listar pedidos</p></Link>
      <Link  href={"/produtos/cadastrar"}><p className={styles.linkTemp}>Cadastrar produtos</p></Link>
      <Link  href={"/produtos/listar"}><p className={styles.linkTemp}>Listar produtos</p></Link>
      <Link  href={"/usuarios/cadastrar"}><p className={styles.linkTemp}>Cadastrar usuarios</p></Link>
      <Link  href={"/usuarios/listar"}><p className={styles.linkTemp}>Listar usuarios</p></Link>
      <Link  href={"/usuarios/login"}><p className={styles.linkTemp}>Login</p></Link>
      <Link  href={"/usuarios/recsenha"}><p className={styles.linkTemp}>Recuperação de senha</p></Link>    
    </div>
  );
}

