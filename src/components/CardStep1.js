import { useContext } from 'react';
import nonosBottomColor from './assets/nonosBottomColor.svg';
import couteauColor from './assets/couteauColor.svg';
import TriggerContext from '../contexts/TriggerContext';
import cri from './assets/cri.mp3';


const Card = () => {

    const { isActive, setIsActive } = useContext(TriggerContext)
    const audio1 = new Audio(cri)

    const activateNonos = (e) => {
        isActive === false ? setIsActive(true) : setIsActive(false);
        audio1.play()
    }

    return (
        <div className="visitCard step1">
            {console.log(isActive)}
            <div id='burger'>
                <img className={isActive === true ? "nonos top active" : 'nonos top'} src={nonosBottomColor} alt='nonos du haut' />
                <img className={isActive === true ? "couteau active" : "couteau"} src={couteauColor} alt='couteau' onClick={activateNonos} />
                <img className={isActive === true ? "nonos bottom active" : 'nonos top'} src={nonosBottomColor} alt='nonos du bas' />
            </div>
        </div>
    )

}

export default Card;