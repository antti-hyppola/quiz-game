import React, { useState } from 'react';
//Components
import QuestionCard from './components/QuestionCard'
//Util
import { fetchQuiz } from './API'
//Types
import { Difficulty, QuestionState } from './API'
//Styles
import { GlobalStyle, Wrapper } from './App.styles'

export interface AnswerObject {
	question: string;
	userAnswer: string;
	correct: boolean;
	correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
	//State
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	//Quiz logic
	const startQuiz = async () => {
		setLoading(true);
		setGameOver(false);
		//Fetch questions from API
		const newQuestions = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY)
		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			//Answer the user selected
			const userAnswer = event.currentTarget.value
			//Check if users answer is correct
			const correct = questions[number].correct_answer === userAnswer
			if (correct) setScore(prev => prev + 1)
			//Save users answer to state
			const answerObject = {
				question: questions[number].question,
				userAnswer,
				correct,
				correctAnswer: questions[number].correct_answer
			}
			setUserAnswers(prev => [...prev, answerObject])
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;
		//Check if last question
		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true)
		} else {
			setNumber(nextQuestion)
		}
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>QU1Z G4M3</h1>
				{/* Display start button only if game hasn't started or is over */}
				{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
					<button className='start' onClick={startQuiz}>
						Start
					</button>) : null
				}
				{/* Only display score when game is on */}
				{!gameOver && <p className='score'>Score: {score}</p>}
				{loading && <p>Loading Questions...</p>}
				{!loading && !gameOver && (
					<QuestionCard
						questionNum={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={userAnswers ? userAnswers[number] : undefined}
						callback={checkAnswer}
					/>)
				}
				{/* Display next question button while game is running and the user has answered the question */}
				{!gameOver &&
					!loading &&
					userAnswers.length === number + 1 &&
					number !== TOTAL_QUESTIONS - 1 && (
						<button className="next" onClick={nextQuestion}>Next Question</button>
					)}
			</Wrapper>
		</>
	);
}

export default App;
