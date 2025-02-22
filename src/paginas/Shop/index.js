import CardProduto from "componentes/CardProduto";
import styles from "./Shop.module.css";
import shopVideoDesktop from "./shopVideoDesktop.mp4";
import shopVideoMobile from "./shopVideoMobile.mp4";
import produtos from "json/produtos.json";
import FiltroProdutos from "componentes/FiltroProdutos";
import { useState } from "react";

export default function Shop() {
   // Estado para armazenar a busca e os filtros
   const [busca, setBusca] = useState("");
   const [filtros, setFiltros] = useState([]);

   // Função para atualizar o termo de busca
   const handleBusca = (event) => {
      setBusca(event.target.value.toLowerCase()); // Converter para minúsculas para busca case-insensitive
   };

   // Função para atualizar os filtros de categoria
   const handleFiltro = (categoria) => {
      setFiltros(
         (prevFiltros) =>
            prevFiltros.includes(categoria)
               ? prevFiltros.filter((f) => f !== categoria) // Remove se já estiver no filtro
               : [...prevFiltros, categoria] // Adiciona se não estiver no filtro
      );
   };

   // Filtrar os produtos com base na busca e nos checkboxes selecionados
   const produtosFiltrados = produtos.filter((produto) => {
      const nomeMatch = produto.descricao.toLowerCase().includes(busca);
      const categoriaMatch =
         filtros.length === 0 || filtros.includes(produto.categoria);

      return nomeMatch && categoriaMatch;
   });

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
            <FiltroProdutos
               busca={busca}
               onBusca={handleBusca}
               onFiltro={handleFiltro}
               filtros={filtros}
            />

            <ul>
               {produtosFiltrados.map((produto) => (
                  <li key={produto.id}>
                     <CardProduto produto={produto} />
                  </li>
               ))}
            </ul>
         </section>
      </main>
   );
}
