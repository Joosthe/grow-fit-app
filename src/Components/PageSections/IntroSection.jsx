import React from 'react'
import GoBackButton from '../PageComponents/Buttons/GoBackButton'
import PageTitle from './PageTitle'
import './styles/intro.scss'

export default function Intro(props) {
  return (
    <div className="intro">
      <GoBackButton/> 
      <PageTitle>{props.title}</PageTitle> 
      <p className="intro-line">{props.line}</p> 
    </div> 
  )
}

