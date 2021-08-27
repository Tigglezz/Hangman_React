import React from "react";
import styled from "styled-components";

const WrongLettersWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 1rem;
  font-family: Patrick Hand;
`;

const WrongLetters = ({ wrongLetters }) => {
  return (
    <WrongLettersWrapper>
      <div>
        {wrongLetters.length > 0 && <p>Wrong Letters</p>}
        {wrongLetters
          .map((letter, i) => (
            <span key={i} style={{ fontSize: "24px" }}>
              {letter}
            </span>
          ))
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </WrongLettersWrapper>
  );
};

export default WrongLetters;
