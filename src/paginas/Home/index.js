import styles from "./Home.module.css";
import backgroundDesktop from "./bg-desktop.png";
import backgroundMobile from "./bg-mobile.png";
import snsDeluxe from "./sns-deluxe.jpg";
import XLogo from './X-logo.png'
import youtubeLogo from './youtube-logo.png'
import instagramLogo from './instagram-logo.png'
import tiktokLogo from './tiktok-logo.png'
import facebookLogo from './facebook-logo.png'

export default function Home() {
   return (
      <main className={styles.mainHome}>

         <section className={styles.sectionHomeNews}>
            <div className={styles.divHomeNews}>
               <img src={snsDeluxe} />
               <h2>NEW RELEASE: SHORT N' SWEET (DELUXE) OUT NOW</h2>
               <p>
                  featuring the hits singles Espresso, Please, Please, Please and
                  Taste.
               </p>
            </div>
         </section>

         <section className={styles.sectionRedesSociais}>
            <h2>Social Media</h2>
            <div className={styles.divRedesSociais}>
               <a href="https://www.youtube.com/sabrina-carpenter" target="_blank">
                  <img src={youtubeLogo}/>
               </a>
               <a href="https://www.tiktok.com/@sabrinacarpenter" target="_blank">
                  <img src={tiktokLogo}/>
               </a>
               <a href="https://www.facebook.com/sabrinacarpenter" target="_blank">
                  <img src={facebookLogo}/>
               </a>
               <a href="https://www.instagram.com/sabrinacarpenter/" target="_blank">
                  <img src={instagramLogo}/>
               </a>
               <a href="https://x.com/sabrinaannlynn" target="_blank">
                  <img src={XLogo}/>
               </a>
            </div>
         </section>
      </main>
   );
}
