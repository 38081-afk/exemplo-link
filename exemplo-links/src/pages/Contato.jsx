import styles from './Contato.module.css'
import homeGIF from '../assets/csgo-dance.gif'
import { useNavigate } from 'react-router-dom'

function Contato() {
  const navigate = useNavigate()
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={homeGIF} alt="" className={styles.gif} />
      <button onClick={ () => navigate('/') }>Home</button>
      <button onClick={ () => navigate('/sobre')}>Sobre</button>
    </div>
  )
}

export default Contato