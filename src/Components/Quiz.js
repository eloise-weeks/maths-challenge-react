import React, {useState, useContext} from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

export default function Quiz() {
    const {score, setScore} = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    const { ans1, setAns1, ans2, setAns2, ans3, setAns3, ans4, setAns4, ans5, setAns5 } = useContext(QuizContext);
    const answerSetters = [setAns1, setAns2, setAns3, setAns4, setAns5];

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score+1);
            answerSetters[currQuestion](true);
            }
        setOptionChosen(null);
        setCurrQuestion(currQuestion + 1);
    }

    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score+1);
            answerSetters[currQuestion](true);
        }
        setGameState("endScreen");
    }

    

    return (
        <div className="Quiz">
            <div className="header">
                <h1>{currQuestion + 1}. {Questions[currQuestion].prompt}</h1>
            </div>
            <div className="options">
                <button onClick={() => setOptionChosen("A")} className={optionChosen === "A" ? "selected" : ""}> {Questions[currQuestion].optionA} </button>
                <button onClick={() => setOptionChosen("B")} className={optionChosen === "B" ? "selected" : ""}> {Questions[currQuestion].optionB} </button>
                <button onClick={() => setOptionChosen("C")} className={optionChosen === "C" ? "selected" : ""}> {Questions[currQuestion].optionC} </button>
                <button onClick={() => setOptionChosen("D")} className={optionChosen === "D" ? "selected" : ""}> {Questions[currQuestion].optionD} </button>
                <button onClick={() => setOptionChosen("E")} className={optionChosen === "E" ? "selected" : ""}> {Questions[currQuestion].optionE} </button>
            </div>
            {currQuestion == Questions.length - 1 ? (
                <button className="lastButton" onClick={finishQuiz}>Finish</button>
            ) : (
                <button className="lastButton" onClick={nextQuestion}>Next Question</button>
            )}
        </div>
        
    )
}