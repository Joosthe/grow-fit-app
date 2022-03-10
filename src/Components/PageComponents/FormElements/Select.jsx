import React from 'react'
import Select from 'react-select'
import styles from './styles/Select.module.scss';

export default function CustomSelect({ options, onChange }) {
  return (
    <div className={styles.simple__select}>
      <Select required classNamePrefix='filter' options={options} onChange={(e) => (onChange(e))} />
    </div>
  )
}
