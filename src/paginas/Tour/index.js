import CardShow from "componentes/CardShow";
import styles from "./Tour.module.css";
import shows from "json/shows.json";
import tourDesktop from "./tourDesktop.png";
import tourMobile from "./tourMobile.png";

export default function Tour() {
   return (
      <main className={styles.mainTour}>
         <picture>
            <source srcSet={tourMobile} media="(max-width: 768px)" />
            <img src={tourDesktop} alt="Tour" />
         </picture>

         <h2>upcoming shows</h2>

         <ul>
            {shows.map((show) => (
               <li key={show.id}>
                  <CardShow show={show} />
               </li>
            ))}
         </ul>
      </main>
   );
}
