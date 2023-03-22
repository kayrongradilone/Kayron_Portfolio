import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const hoverLetter = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    hoverLetter()
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
              ></img>
              <div className='content'>
                <p className='title'>
                  {port.title}
                </p>
                <h4 className='description'>
                  {port.description}
                </h4>
                <button className='btn' onClick={() => window.open(port.url)}>
                  Confira
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <Layout />
      <Sidebar />
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
