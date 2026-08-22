import styles from './styles.module.css'

const bookOne = {
    autor: "Charles Duhigg",
    title: "O Poder do Hábito",
    quant: 10,
    image: "https://m.media-amazon.com/images/I/815iPX0SgkL._SY385_.jpg"   
};
const bookTwo = {
    autor: "Carol S. Dweck",
    title: "Mindset: A nova psicologia do sucesso",
    quant: 5,
    image: "https://m.media-amazon.com/images/I/71Ils+Co9fL._SY385_.jpg"   
};

const Card1 = ( {autor, titulo, image, quant} ) => {

    return(
            <>
                <div className={styles.container}>
                    <img className={styles.poster} src={image} alt={titulo} />
                        <div>
                        <h2 className={titulo}>{titulo}</h2>
                        <p className={styles.description}>{autor}</p>
                        <p>Quantidade: {quant}</p>
                        <button className={styles.button}>Comprar</button>
                        </div>
                </div>
            </>
        )
}

export default function CardList(){
    return(
        <>
            <Card1 autor={bookOne.autor} titulo={bookOne.title} image={bookOne.image} quant={bookOne.quant}/>
            <Card1 autor={bookTwo.autor} titulo={bookTwo.title} image={bookTwo.image} quant={bookTwo.quant}/>
        </>
    )
}