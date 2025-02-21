import styles from "./BoxVideo.module.css";

export default function BoxVideo({ video }) {
   return (
      <div className={styles.boxVideo}>
         <iframe
            width="560"
            height="315"
            src={video.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
         ></iframe>
         <h2>espresso(official video)</h2>
      </div>
   );
}
