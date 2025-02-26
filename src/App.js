import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [ans1, setAns1] = useState(null);
  const [ans2, setAns2] = useState(null);
  const [ans3, setAns3] = useState(null);
  const [ans4, setAns4] = useState(null);
  const [ans5, setAns5] = useState(null);

  
  return (
    <div className="AppContainer">
      <div className="Nav">
        
      </div>

      <div className="App">
        <QuizContext.Provider value={{gameState, setGameState, score, setScore, ans1, setAns1, ans2, setAns2, ans3, setAns3, ans4, setAns4, ans5, setAns5}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
