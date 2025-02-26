import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";

export default function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <div className="Menu">
            <div className="header">
                <h1>Maths Challenge!</h1>
            </div>
            
            <button onClick={() => {setGameState("quiz")}}>Start</button>
        </div>
    )
}