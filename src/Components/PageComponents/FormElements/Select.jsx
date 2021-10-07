import React from 'react'
import Select from 'react-select'
import styles from './styles/Select.module.scss';
export default function CustomSelect(props) {

  return (
    <div className={styles.simple__select}>
      <Select classNamePrefix='filter' options={props.options} onChange={(e)=>(props.onChange(e))}  />
    </div>
  )
}
