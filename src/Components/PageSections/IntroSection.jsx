import React from 'react'
import PageTitle from './PageTitle'
import GoBackButton from '@PageComponent/Buttons/GoBackButton'
import './styles/intro.scss'

export default function IntroSection({ title, line }) {
  return (
    <div className="intro">
      <GoBackButton />
      <PageTitle>{title}</PageTitle>
      <p className="intro-line" dangerouslySetInnerHTML={{ __html: line }} />
    </div>
  )
}

