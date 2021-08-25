import React from 'react'
import Select from 'react-select'
export default function CustomSelect(props) {
  return (
    <div className="custom-select">
      <Select options={props.options} ref={props.testref}/>
    </div>
  )
}
