import React from 'react'

export default function PrevArrow({ className, onClick }) {
  return (
    <button type="button" data-role="none" className={className}
      onClick={onClick} aria-label="previous">&larr;</button>
  );
};
