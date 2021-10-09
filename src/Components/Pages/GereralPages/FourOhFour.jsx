import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/FourOhFour.module.scss';
import {IoSearchOutline} from 'react-icons/io5';
import {VscChevronRight} from 'react-icons/vsc'
import useStaticContent from '../../../Hooks/useStaticContent';
function FourOhFour() { 
  const sc = useStaticContent('GeneralPages.FourOhFour');
  return (
    <div className={styles.fourohfour__wrapper}>
      <h1 className={styles.fourohfour__title}>{sc.title}<span className={styles.fourohfour__icon}><IoSearchOutline/></span></h1>
      <p className={styles.fourohfour__subtitle}>{sc.subtitle}</p>
      <p className={styles.fourohfour__subline}>{sc.subline}</p>
      <Link to="/" className={styles.fourohfour__gobackButton}> {sc.gobackbutton}<VscChevronRight/></Link>
    </div>
  )
}

export default FourOhFour;
