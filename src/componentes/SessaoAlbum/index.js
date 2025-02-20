import styles from './SessaoAlbum.module.css'

export default function SessaoAlbum({ album }){
    return (
        <section className={styles.sessaoAlbum} style={{ backgroundColor: album.cor }} >
            <img src={album.capa} />
            <div className={styles.albumBotao}>
                <h2>{album.nome}</h2>
                <button>Stream / Download</button>
            </div>
            <ul className={styles.listaMusicas}>
                {album.musicas.map((faixa, index) => (
                    <li key={index}>{faixa.musica}</li>
                ))}
            </ul>
        </section>
    )
}