import styles from './Sobre.module.css'
import sobreGIF from '../assets/dance.gif'
import { useNavigate } from 'react-router-dom'

function Sobre() {
  const navigate = useNavigate()
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <img src={sobreGIF} alt="" className={styles.gif} />
      <button onClick={ () => navigate('/') }>Home</button>
      <button onClick={ () => navigate('/contato')}>Contato</button>
    </div>
  )
}

export default Sobre