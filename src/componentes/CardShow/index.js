import styles from "./CardShow.module.css";

export default function CardShow({ show }) {
   return (
      <div className={styles.cardShow}>
         <span className={styles.spanData}>{show.data}</span>
         <div className={styles.divLugar}>
            <span className={styles.spanCidadePais}>{show.cidade}, {show.pais}</span>
            <span>{show.local}</span>
         </div>
         <button>Tickets</button>
      </div>
   );
}
