import React from 'react'
import { Link } from 'react-router-dom'
import { BsShieldLock } from 'react-icons/bs';
import { VscChevronRight } from 'react-icons/vsc'
import useStaticContent from '@/Hooks/useStaticContent';
import styles from './styles/Errorpage.module.scss';


function NoAcces() {
  const sc = useStaticContent('GeneralPages.NoAcces');
  return (
    <div className={styles.errorpage__wrapper}>
      <h1 className={styles.errorpage__title}>{sc.title}<span className={styles.errorpage__icon}><BsShieldLock /></span></h1>
      <p className={styles.errorpage__subtitle}>{sc.subtitle}</p>
      <p className={styles.errorpage__subline}>{sc.subline}</p>
      <Link to="/" className={styles.errorpage__gobackButton}> {sc.gobackbutton}<VscChevronRight /></Link>
    </div>
  )
}

export default NoAcces;
