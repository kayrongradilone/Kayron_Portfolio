import { Link } from 'react-router-dom'
import LetraK from '../../assets/images/letra-k.png'
import Layout from '../Layout'
import './index.scss'

const Home = () => {
  return (
    <>
      <Layout />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            
            Olá, <br /> Eu me chamo
            <br /> <img src={LetraK} alt="letraK"></img>ayron Gradilone
            <br/>
            Desenvolvedor Web
          </h1>
            <h2>Desenvolvedor Front-End / Javascript / React </h2>
            <Link to="/contact" className='flat-button'>ENTRE EM CONTATO</Link>
        </div>
      </div>
    </>
  )
}

export default Home
