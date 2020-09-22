import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #fff;
    border: 3px solid #000;
    padding: 20px;
    box-shadow: 5px 10px 20px rgba(0, 133, 163, 0.25);
    text-align: center;

    p {
        font-size: 1rem;
    }
`

interface ButtonWrapperProps {
    //Correct answer
    correct: boolean;
    //What user clicked. Both passed from QuizCard component
    userClick: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClick }) =>
        correct
            ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
            : !correct && userClick
                ? 'linear-gradient(90deg, #FF5656, #C16868)'
                : '#000'};
        border: 3px solid #ffffff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
      }
`