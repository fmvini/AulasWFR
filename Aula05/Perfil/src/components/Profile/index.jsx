import me from '../../assets/me.jpg'
import styles from './styles.module.css'

function Profile(){
    return (
        <div className={styles.Profile}>
            <img className={styles.Profile_picture} src={me} alt="Foto de perfil" />
            <h1 className={styles.Profile_name}>Vinícius F. Marrocos</h1>
            <hr></hr>
            <p className={styles.Profile_title}>Estudante de ADS - IFSP</p>
            <hr></hr>
            <div className={styles.contato}>
                <p className="tel">19 99912-0733</p>
                <p className="mail">viniciusfmarrocos@gmail.com</p>
            </div>
            <a className={styles.github_button} href="https://github.com/fmvini" target="_blank" rel="noopener noreferrer">Github</a>
            <br></br>
            <a className={styles.linkedin_button} href="https://www.linkedin.com/in/vinicius-fatichi-marrocos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br></br>
            <a className={styles.portifolio_button} href="https://fmvini.github.io/Portifolio/" target="_blank" rel="noopener noreferrer">Portifolio</a>
        </div>
    )
}

export default Profile