import styles from './Home.module.css'
import homeGIF from '../assets/cs2.gif'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={homeGIF} alt=""  className={styles.gif}/>
      <button onClick={ () => navigate('/sobre')}>Sobre</button>
      <button onClick={ () => navigate('/contato')}>Contato</button>
    </div>
  )
}

export default Home
