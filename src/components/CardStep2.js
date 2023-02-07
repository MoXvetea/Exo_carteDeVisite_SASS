import { useContext, useState } from 'react';
import TriggerContext from '../contexts/TriggerContext';

const CardStep2 = () => {

  const { isActive, setIsActive } = useContext(TriggerContext)
  
    return (
      //  <div className="visitCard step2 active">
      <div className={isActive === true? "visitCard step2 active":'visitCard step2'}>
  <div className="cont">
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
        </div >
    )
}


export default CardStep2;