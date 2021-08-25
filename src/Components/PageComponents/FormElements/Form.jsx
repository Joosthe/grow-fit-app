import React from 'react';
import './styles/FormElements.scss';
export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className={props.className} action="post">
      {props.children}
    </form>
  )
}
