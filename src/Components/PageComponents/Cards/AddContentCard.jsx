import React from 'react'
import { Link } from 'react-router-dom'
import './styles/addContentCard.scss'

export default function AddContentCard({ to, icon, title, descr }) {
  return (
    <Link to={to} className="card--add--content">
      <div className="card--header">
        {icon}
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{descr}</p>
      </div>
    </Link>
  )
}
