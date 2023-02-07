import { useState } from 'react';
import TriggerContext  from "./contexts/TriggerContext";
import CardStep1 from './components/CardStep1';
import CardStep2 from './components/CardStep2';
import CardStep3 from './components/CardStep3';

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="App">
      <TriggerContext.Provider value ={{isActive, setIsActive }}>
      <CardStep1/>
      <CardStep2/>
      <CardStep3/>
      </TriggerContext.Provider>
    </div>
  );
}

export default App;
