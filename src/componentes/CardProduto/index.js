import styles from './CardProduto.module.css'

export default function CardProduto({ produto }){
    return(
        <div className={styles.cardProduto}>
            <img src={produto.imagem} />
            <p>{produto.descricao}</p>
            <p>${produto.preco}</p>
            <button>Buy</button>
        </div>
    )
}