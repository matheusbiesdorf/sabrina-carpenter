import BoxVideo from 'componentes/BoxVideo'
import styles from './Videos.module.css'
import videos from "json/videos.json"

export default function Videos(){
    return(
        <ul className={styles.ulVideos}>
            {videos.map((video) => (
                <li key={video.id}>
                    <BoxVideo video={video} />
                </li>
            ))}
        </ul>
    )
}