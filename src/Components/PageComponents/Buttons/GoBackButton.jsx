import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import './styles/gobackbutton.scss'
export default function GoBackButton() {
  const history = useHistory();
  return (
    <a onClick={(e) => { e.preventDefault(); history.goBack() }} className="goback-button">
      <i className="goback-icon">
        <FaChevronLeft />
      </i>
      <p className="goback-text">Go back</p>
    </a>
  )
}


