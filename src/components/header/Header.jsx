import React from 'react'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lawyer}>
      <img src={process.env.PUBLIC_URL + '/images/Logo (4).png'} alt="Açıklama" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className={styles.make}>
          <button>Register <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  )
}

export default Header