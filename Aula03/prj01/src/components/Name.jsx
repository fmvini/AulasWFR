import styles from './Name.module.css'
import Situacao from './Situation'
export default function Name(){
    const name = "Vinícius"
    const descricao = "Meu nome é Vinícius, sou de Socorro SP, tenho 18 anos e estou cursando Análise e Desenvolvimento de Sistemas no IFSP!"
    
    return(
        <>
            <div className={styles.formato}>
                <h3 style={{color: "purple"}}>{name}</h3>
                <p>{descricao}</p>
                {Situacao()}
            </div>
        </>
    )
}