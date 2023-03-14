import Layout from '../Layout';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const Age = () => {
        let myAge = new Date()
        myAge = myAge.getFullYear() - 1994
        return myAge
    }

    useEffect(() => {
        hoverLetter()
      },[])


    const hoverLetter = () => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        },4000)
      }
    
     

    return (
        <>
        <Loader type='pacman'/>
        <Layout/>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['S','o','b','r','e',' ','m','i','m']}
                idx={15}
                />
                </h1>
                <p>Sou um desenvolvedor Front-End, com enfâse no usa da biblioteca React, atualmente estou me formando no cusro de Análise e desenvolvimento de sistemas e 
                    estou a procura de ingressar na carreira.
                </p>
                <p>Tenho {Age()} anos, Natural de Santos-SP e morando em Florianópolis. Após 8 anos de trabalho no funcionalismo público, estou em busca de atuar na área que sempre foi aficionado, ao longo do meu curso de faculdade
                   conheci e logo me apaixonei pelo Front-End, e comecei a estudar cada vez mais para me especializar nas melhores e mais atuais tecnologias da área.  
                </p>
                <p>Sou um profissional que busca sempre aprender com excelencia novas coisas, e evoluir na carreiro é sempre meu maior objetivo.</p>
            </div>
            <div className='stage-cube-cont'>
            <div className='cubespinner'>

                <div className='face2'>
                    <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
                </div>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
                </div>

            </div>
        </div>
        </div>
        
        </>
    )
}

export default About