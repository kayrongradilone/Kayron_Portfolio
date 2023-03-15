import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LetraK from '../../assets/images/letra-k.png'
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout'
import Sidebar from '../sidebar'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'y', 'r', 'o', 'n']
  const lastNameArray = ['G', 'r', 'a', 'd', 'i', 'l', 'o', 'n', 'e']
  const jobArray = [
    'D',
    'e',
    's',
    'e',
    'n',
    'v',
    'o',
    'l',
    'v',
    'e',
    'd',
    'o',
    'r',
    ' ',
    'W',
    'e',
    'b',
    '.',
  ]
  const hoverLetter = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },4000)
  }

  useEffect(() => {
    hoverLetter()
  },[])
  
  const hello = ['O', 'l', 'á', ',']
  const greetings = ['E', 'u', ' ', 'm', 'e', ' ', 'c', 'h', 'a', 'm', 'o']
  return (
    <>
    <Sidebar/>
      <Layout />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hello}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetings}
              idx={13}
            />
            <br />
            <img src={LetraK} alt="letraK"></img>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /> <AnimatedLetters
            letterClass={letterClass}
            strArray={lastNameArray}
            idx={18}
          />
            
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Desenvolvedor Front-End / Javascript / React </h2>
          <Link to="/contact" className="flat-button">
            ENTRE EM CONTATO
          </Link>
        </div>
        <Logo/>
      </div>
      <div>
        <Loader type='pacman'/>
      </div>
    </>
  )
}

export default Home
