import React from "react";
import styled from "styled-components";

const WordWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Patrick Hand SC;
`;

const LetterWrapper = styled.span`
  border-bottom: 3px solid #2980b9;
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
`;

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <WordWrapper>
      {selectedWord.split("").map((letter, i) => {
        return (
          <LetterWrapper key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </LetterWrapper>
        );
      })}
    </WordWrapper>
  );
};

export default Word;
