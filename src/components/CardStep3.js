import { useContext, useState } from 'react';
import TriggerContext from '../contexts/TriggerContext';

const CardStep3 = () => {

  const { isActive, setIsActive } = useContext(TriggerContext)
  
    return (
<div className={isActive === true? "visitCard step3 active":'visitCard step3'}>
  <div className='titleTop'>
<h1>MøMøDzillaWebÐezign.com</h1>
<h2 className='h2top'>C'est moche...</h2>
</div>
<div className='titleBottom'>
<h2 className='h2Bottom'>mais c'est pas CHER <span className='gros exclamation1'>!</span><span className='gros exclamation2'>!</span><span className='gros exclamation3'>!</span></h2>
</div>
</div>
    )

}

export default CardStep3;
