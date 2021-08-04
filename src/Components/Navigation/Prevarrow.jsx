import React from 'react'
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <button type="button" data-role="none"  className={className}
      onClick={onClick} aria-label="previous">&larr;</button>
  );
}

export default PrevArrow;
