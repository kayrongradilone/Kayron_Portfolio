import Layout from '../Layout';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';



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
                    estou a procura de ingressar a minha carreira na área.
                </p>
                <p>Tenho {Age()} anos Natural de Santos-SP, e morando em Florianópolis. Após 8 anos de trabalho no funcionalismo público, estou em busca de atuar na área que sempre foi aficionado, ao longo do meu curso de faculdade
                   conheci e logo me apaixonei pelo Front-End, e comecei a estudar cada vez mais para me especializar nas melhores e mais atuais tecnologias da área.  
                </p>
                <p>Sou um profissional que busca sempre aprender com excelencia novas coisas, e evoluir na carreiro é sempre meu maior objetivo.</p>
            </div>
        
        </div>
        </>
    )
}

export default About