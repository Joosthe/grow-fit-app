import React from 'react'

export default function Container(props) {
  return (
    <div className='md:container md:mx-auto' >
      { props.children}
    </div>
  )
}
