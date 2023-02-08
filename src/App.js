// Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=41894">Pixabay</a>

// Dripping effect https://codes4education.com/pure-css-dripping-liquid-effect-animated-background/

import { useState } from 'react';
import TriggerContext from "./contexts/TriggerContext";
import CardStep1 from './components/CardStep1';
import CardStep2 from './components/CardStep2';
import CardStep3 from './components/CardStep3';
import CardStep4 from './components/CardStep4';

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="App">
      <TriggerContext.Provider value={{ isActive, setIsActive }}>
        <CardStep1 />
        <CardStep2 />
        <CardStep3 />
        <CardStep4 />
      </TriggerContext.Provider>
    </div>
  );
}

export default App;
