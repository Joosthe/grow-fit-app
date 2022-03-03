import React from 'react'
import GoBackButton from '@/Components/PageComponents/Buttons/GoBackButton'
import PageTitle from './PageTitle'
import './styles/intro.scss'

export default function IntroSection(props) {
  return (
    <div className="intro">
      <GoBackButton />
      <PageTitle>{props.title}</PageTitle>
      <p className="intro-line" dangerouslySetInnerHTML={{ __html: props.line }} />
    </div>
  )
}

