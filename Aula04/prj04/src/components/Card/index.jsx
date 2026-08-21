import styles from './styles.module.css'

export default function Card( {book, quant} ){

    return(
        <>
            <div className={styles.container}>
                <img className={styles.poster} src={book.image} alt={book.title} />
                    <div>
                    <h2 className={styles.title}>{book.title}</h2>
                    <p className={styles.description}>{book.description}</p>
                    <p>Quantidade: {quant}</p>
                    <button className={styles.button}>Comprar</button>
                    </div>
            </div>
        </>
    )
}