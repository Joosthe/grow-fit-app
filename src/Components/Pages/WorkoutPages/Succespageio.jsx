import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../Contexts/UserContext';
import { encouragements } from '../../../Data/nicknames';
import Button from '../../PageComponents/Buttons/Button';
import styles from './styles/Succes.module.scss'

export default function Succespage() {
  const {currentUser} = useUser();
  return (
    <div className={styles.succesbox}>
      <h1>
        {encouragements[Math.floor(Math.random() * encouragements.length)]}, {currentUser.nicknames}
      </h1>
      <Button to="/profile" variant="btn--succespage">Next</Button>
    </div>
  )
}
