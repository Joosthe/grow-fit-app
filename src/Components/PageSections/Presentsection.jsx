import React from 'react'
import './styles/Presentsection.scss';
export default function Presentsection(props) {
  return (
    <div className={"flex flex-wrap overflow-hidden sm:-mx-2  present__section__wrapper "+ (props.reverse? "flex-row-reverse" : "" )}>
     <div className="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img src={props.imgUrl} alt={'presentation img'}/>
      </div>
      <div className="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2 lg:w-1/2 xl:w-1/2 text-column">
          {props.children}
      </div>

</div>
  )
}
