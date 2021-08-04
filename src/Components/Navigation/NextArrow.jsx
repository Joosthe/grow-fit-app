import React from 'react'
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button type="button" data-role="none" aria-label="next" onClick={onClick} className={className}> 
      &rarr;
    </button>
  );
}

export default NextArrow;
