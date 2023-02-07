import { useContext, useState } from 'react';
// import couteaumm from './assets/couteaumm.svg'
import nonosBottomColor from './assets/nonosBottomColor.svg'
import couteauColor from './assets/couteauColor.svg'
import TriggerContext from '../contexts/TriggerContext';


const Card = () => {
    // const [isActive, setIsActive] = useState(false);
const { isActive, setIsActive } = useContext(TriggerContext)

    const activateNonos =(e) =>{      
       isActive === false? setIsActive(true):setIsActive(false);
    }

    return (
        <div className="visitCard step1">
            {console.log(isActive)}
            <div id='burger'>
                <img className={isActive === true? "nonos top active":'nonos top'}  src={nonosBottomColor} alt='nonos du haut' />
                <img className={isActive === true? "couteau active": "couteau"} src={couteauColor} alt='couteau' onClick={activateNonos}/>
                <img className={isActive === true? "nonos bottom active":'nonos top'} src={nonosBottomColor} alt='nonos du bas' />
            </div>
        </div>
    )

}

export default Card;