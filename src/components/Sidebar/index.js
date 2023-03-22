import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LetraK from '../../assets/images/letra-k.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className='logo-img' src={LetraK} alt="logo"></img>
      <img className="sub-logo" src={LogoSubtitle} alt="kayron"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kayrongradilone/"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kayrongradilone"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5548991158345"
        >
          <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/kayrongradilone"
        >
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/kayrongradilone"
        >
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
