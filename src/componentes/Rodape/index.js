import styles from './Rodape.module.css'

export default function Rodape(){
    return(
        <footer className={styles.footerRodape}>
            <p>Desenvolvido por <a href="https://github.com/matheusbiesdorf" target='_blank'>Matheus Biesdorf</a>. Projeto fictício sem fins comerciais.</p>
        </footer>
    )
}