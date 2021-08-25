import React from 'react'
import PageTitle from './PageTitle'

export default function Intro(props) {
  return (
    <section className="intro">
      <PageTitle>{props.title}</PageTitle>
      <p className="intro-line">{props.line}</p>
    </section>
  )
}
