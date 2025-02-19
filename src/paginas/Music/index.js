import SessaoAlbum from "componentes/SessaoAlbum";
import styles from "./Music.module.css";
import albuns from "json/albuns.json";

export default function Music() {
   return (
      <ul className={styles.ulMusic}>
         {albuns.map((album) => (
            <li key={album.id}>
               <SessaoAlbum album={album} />
            </li>
         ))}
      </ul>
   );
}
