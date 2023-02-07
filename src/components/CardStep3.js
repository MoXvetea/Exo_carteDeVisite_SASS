import { useContext, useState } from 'react';
import TriggerContext from '../contexts/TriggerContext';

const CardStep3 = () => {

  const { isActive, setIsActive } = useContext(TriggerContext)
  
    return (
<div className={isActive === true? "visitCard step3 active":'visitCard step3'}>
<h1>MøMøDzillaWebÐezign.com</h1>
<h2>C'est moche...</h2>
<h2>mais c'est pas <span className='gros'>CHER</span> <span className='gros exclamation1'>!</span><span className='gros exclamation2'>!</span><span className='gros exclamation3'>!</span></h2>
</div>
    )

}

export default CardStep3;
