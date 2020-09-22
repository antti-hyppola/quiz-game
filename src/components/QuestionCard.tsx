import React from 'react'
//Types
import { AnswerObject } from '../App'
//Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

interface Props {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

function QuestionCard({
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestions
}: Props) {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClick={userAnswer?.userAnswer === answer}
                    >
                        <button
                            disabled={!!userAnswer}
                            onClick={callback}
                            value={answer}
                        >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard