import React, {useContext} from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";


export default function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const { ans1, setAns1, ans2, setAns2, ans3, setAns3, ans4, setAns4, ans5, setAns5 } = useContext(QuizContext);
    const answerSetters = [setAns1, setAns2, setAns3, setAns4, setAns5];

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
        answerSetters.forEach(setter => setter(false));
    }
    
    return (
        <div className="EndScreen">
            <div className="header">
                <h1>Score: {score} / {Questions.length}</h1>
            </div>
            <div className="numbers">
                <div className={ans1 ? "correctAns" : "incorrectAns"}>
                    1
                </div>
                <div className={ans2 ? "correctAns" : "incorrectAns"}>
                    2
                </div>
                <div className={ans3 ? "correctAns" : "incorrectAns"}>
                    3
                </div>
                <div className={ans4 ? "correctAns" : "incorrectAns"}>
                    4
                </div>
                <div className={ans5 ? "correctAns" : "incorrectAns"}>
                    5
                </div>

            </div>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}