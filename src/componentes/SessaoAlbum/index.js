import styles from './SessaoAlbum.module.css'

export default function SessaoAlbum({ album }){
    return (
        <section className={styles.sessaoAlbum}>
            <img src={album.capa} />
            <h2>{album.nome}</h2>
        </section>
    )
}