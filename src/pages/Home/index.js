import styles from "./Home.module.css";
import imagemHome1 from './sns-deluxe.jpg'
import facebookLogo from './facebook-logo.png'
import instagramLogo from './instagram-logo.png'
import tiktokLogo from './tiktok-logo.png'
import XLogo from './X-logo.png'
import youtubeLogo from './youtube-logo.png'

export default function Home() {
   return (
      <>
         <main className={styles.home}>

            <div className={styles.newsHome}>
               <img src={imagemHome1} />
               <h2>NEW RELEASE: SHORT N' SWEET (DELUXE) OUT NOW</h2>
            </div>

            <div className={styles.socialMedia}>
               <img src={facebookLogo} />
               <img src={instagramLogo} />
               <img src={XLogo} />
               <img src={youtubeLogo} />
               <img src={tiktokLogo} />
            </div>

         </main>
      </>
   );
}
