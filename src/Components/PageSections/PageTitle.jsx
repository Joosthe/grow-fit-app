import React from 'react'

export default function PageTitle(props) {
  return (
    <h1 className="text-4xl font-semibold page-title">{props.children}</h1>
  )
}
