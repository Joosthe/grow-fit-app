import React from 'react';
import './styles/FormElements.scss';

export default function Form({ onSubmit, className, children }) {
  return (
    <form onSubmit={onSubmit} className={className} action="post">
      {children}
    </form>
  )
}
