import Loader from 'react-loaders'
import Layout from '../Layout'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,  useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(false)

  const hoverLetter = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    hoverLetter()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmailMessage',
        'template_u85u39m',
        e.target,
        'Vo7Nbm1N4g1Wo9-Dz'
      )
      .then(
        (result) => {
          if (isLoading) {
            setIsLoading(true)
          }
          alert('Email enviado com sucesso!!')
          console.log(result.text)
        },
        (error) => {
          alert('Erro ao enviar o Email, tente denovo!!')
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Layout />
      <Loader type="pacman" />

      <div className="container contact-page">
        <div className="info-map">
          Kayron Gradilone,
          <br />
          Florianópolis, Brasil,
          <br />
          <span>kayrongradilone@hotmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[-27.5884043, -48.5476194 ]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[-27.5884043, -48.5476194]}>
                    <Popup>Essa é minha localização!</Popup>
                </Marker>
            </MapContainer>
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'E',
                'n',
                't',
                'r',
                'e',
                ' ',
                'e',
                'm',
                ' ',
                'c',
                'o',
                'n',
                't',
                'a',
                't',
                'o',
              ]}
              idx={15}
            />
          </h1>
          <p>
            Estou interessado em conseguir meu primeiro trabalho como júnior em
            desenvovimento, na parte do Front-End, fique a vontade para me
            contatar e tirar qualquer dúvida sobre minhas habilidades.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nome" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Assunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensagem"
                    name="message"
                    required
                  ></textarea>
                </li>
              </ul>
              <input
                type="submit"
                className="flat-button"
                value="Enviar"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
