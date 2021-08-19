import React from 'react'
import { Link } from 'react-router-dom';
import './styles/button.scss';

export default function Button(props) {
  const { variant = 'btn-norm' } = props;
  if(props.to){
    return (
      <Link to={props.to}><button className={'btn ' + variant} to={props.to} onClick={props.onClick}> {props.children}   </button></Link>
    )
  }else{
    return <button className={'btn ' + variant} to={props.to} onClick={props.onClick}> {props.children}   </button>
  }
}

