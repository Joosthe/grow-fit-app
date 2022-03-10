import React from 'react'

export default function NextArrow({ className, onClick }) {
  return (
    <button type="button" data-role="none" aria-label="next" onClick={onClick} className={className}>
      &rarr;
    </button>
  );
}

