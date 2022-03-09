import React from 'react';
import Button from '@PageComponent/Buttons/Button';
import { useUser } from '@/Contexts/UserContext';
import { encouragements } from '@/StaticContent/nicknames-En';
import styles from './styles/Succes.module.scss'

export default function Succespage() {
  const { currentUser } = useUser();
  return (
    <div className={styles.succesbox}>
      <h1>
        {encouragements[Math.floor(Math.random() * encouragements.length)]}, {currentUser.nicknames}
      </h1>
      <Button to="/profile" variant="btn--succespage">Next</Button>
    </div>
  )
}
