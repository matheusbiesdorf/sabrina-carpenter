import styles from "./FiltroProdutos.module.css";

export default function FiltroProdutos() {
   return (
      <aside>
         <h3>Filter</h3>

         <input
            type="text"
            placeholder="Search"
            className={styles.buscarProduto}
         />

         <div className={styles.filtroCategoria}>
            <label>
               <input type="checkbox" /> Filtro 1
            </label>
            <label>
               <input type="checkbox" /> Filtro 2
            </label>
            <label>
               <input type="checkbox" /> Filtro 3
            </label>
         </div>
      </aside>
   );
}
