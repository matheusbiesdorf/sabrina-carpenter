import styles from "./Home.module.css";
import backgroundDesktop from "./bg-desktop.png";
import backgroundMobile from "./bg-mobile.png";
import snsDeluxe from "./sns-deluxe.jpg";

export default function Home() {
   return (
      <main className={styles.mainHome}>

         
            <div className={styles.homeNews}>
               <img src={snsDeluxe} />
               <h2>NEW RELEASE: SHORT N' SWEET (DELUXE) OUT NOW</h2>
               <p>
                  featuring the hits singles Espresso, Please, Please, Please
                  and Taste.
               </p>
            </div>
         

         <section className={styles.redesSociais}>
            <div>

            </div>
         </section>
      </main>
   );
}
