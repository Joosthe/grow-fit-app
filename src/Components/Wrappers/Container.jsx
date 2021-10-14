import React from 'react'

export default function Container(props) {
  return (
    <div className={props.className +' md:container md:mx-auto px-3 sm:px-0'} >
      { props.children}
    </div>
  )
}
