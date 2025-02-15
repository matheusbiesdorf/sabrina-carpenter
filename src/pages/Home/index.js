import styles from "./Home.module.css";
import imagemHome1 from './sns-deluxe.jpg'

export default function Home() {
   return (
      <>
         <main className={styles.home}>

            <div className={styles.newsHome}>
               <img src={imagemHome1} />
               <h2>NEW RELEASE: SHORT N' SWEET (DELUXE) OUT NOW</h2>
            </div>
            
         </main>
      </>
   );
}
