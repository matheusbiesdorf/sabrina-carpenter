import CardProduto from "componentes/CardProduto";
import styles from "./Shop.module.css";
import shopVideoDesktop from "./shopVideoDesktop.mp4";
import shopVideoMobile from "./shopVideoMobile.mp4";
import produtos from "json/produtos.json";
import FiltroProdutos from "componentes/FiltroProdutos";

export default function Shop() {
   return (
      <main className={styles.mainShop}>
         
         <video autoPlay loop muted>
            <source
               src={shopVideoMobile}
               media="(max-width: 600px)"
               type="video/mp4"
            />
            <source
               src={shopVideoDesktop}
               media="(min-width: 601px)"
               type="video/mp4"
            />
         </video>

         <h2>Shop</h2>
      
         <section className={styles.sectionLoja}>

            <FiltroProdutos/>

            <ul>
               {produtos.map((produto) => (
                  <li key={produto.id}>
                     <CardProduto produto={produto} />
                  </li>
               ))}
            </ul>
         </section>

      </main>
   );
}
