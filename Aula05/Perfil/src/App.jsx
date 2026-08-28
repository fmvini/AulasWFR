import styles from './components/Profile/styles.module.css'
import Profile from './components/Profile'

function App() {

  return (
    <>
        <div className={styles.container}>
            <div className={styles.card}>
                <Profile />
            </div>
        </div>
    </>
  )
}

export default App
