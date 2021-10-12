import React from 'react';
import { encouragements } from '../../../Data/nicknames';

export default function succespage() {
  return (
    <div className="succesbox">
      <h1>
        {encouragements[Math.floor(Math.random() * encouragements.length)]}
      </h1>
    </div>
  )
}
