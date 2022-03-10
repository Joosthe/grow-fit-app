import React from 'react'
import { Link } from 'react-router-dom';
import './styles/button.scss';

export default function Button({ to, onClick, variant = 'btn-norm', dataId, children }) {
  if (to) {
    return (
      <Link to={to}><button className={'btn ' + variant} to={to} onClick={onClick} data-id={dataId}> {children}   </button></Link>
    )
  } else {
    return <button className={'btn ' + variant} to={to} onClick={onClick} data-id={dataId}> {children}</button>
  }
}

