import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5';
import { VscChevronRight } from 'react-icons/vsc'
import useStaticContent from '@/Hooks/useStaticContent';
import styles from './styles/Errorpage.module.scss';

function FourOhFour() {
  const sc = useStaticContent('GeneralPages.FourOhFour');
  return (
    <div className={styles.errorpage__wrapper}>
      <h1 className={styles.errorpage__title}>{sc.title}<span className={styles.errorpage__icon}><IoSearchOutline /></span></h1>
      <p className={styles.errorpage__subtitle}>{sc.subtitle}</p>
      <p className={styles.errorpage__subline}>{sc.subline}</p>
      <Link to="/" className={styles.errorpage__gobackButton}> {sc.gobackbutton}<VscChevronRight /></Link>
    </div>
  )
}

export default FourOhFour;
