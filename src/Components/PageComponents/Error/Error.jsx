import React from 'react'
import { useError } from '../../../Contexts/ErrorContext'
import './styles/error.scss'

export default function Error() {
  const {error, clearMessage} = useError();
  return (
    <div className={ "error error--" + error.status}>
      <p>{error.message}</p>
      <button onClick={clearMessage}>x</button>
    </div>
  )
}
