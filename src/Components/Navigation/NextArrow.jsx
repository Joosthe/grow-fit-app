import React from 'react'

function NextArrow({ className, onClick }) {
  return (
    <button type="button" data-role="none" aria-label="next" onClick={onClick} className={className}>
      &rarr;
    </button>
  );
}

export default NextArrow;
