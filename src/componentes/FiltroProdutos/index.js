import styles from "./FiltroProdutos.module.css";

export default function FiltroProdutos({ busca, onBusca, onFiltro, filtros }) {
   const categorias = ["Music", "Tour", "Miscellaneous"]; // Categorias disponíveis

   return (
      <aside>
         <h3>Filter</h3>

         {/* Campo de busca */}
         <input
            type="text"
            placeholder="Search"
            className={styles.buscarProduto}
            value={busca}
            onChange={onBusca} // Chama a função ao digitar
         />

         {/* Checkboxes de filtros */}
         <div className={styles.filtroCategoria}>
            {categorias.map((categoria) => (
               <label key={categoria}>
                  <input
                     type="checkbox"
                     checked={filtros.includes(categoria)}
                     onChange={() => onFiltro(categoria)} // Chama a função ao clicar
                  />
                  {categoria}
               </label>
            ))}
         </div>
      </aside>
   );
}
