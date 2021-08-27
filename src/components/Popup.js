import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;
`;

const PopupWrapper = styled.div`
  background: #2980b9;
  border-radius: 5px;
  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  font-family: Patrick Hand;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  color: #2980b9;
  border: 0;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
  font-family: Patrick Hand SC;
`;

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <Container style={finalMessage !== "" ? { display: "flex" } : {}}>
      <PopupWrapper>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <Button onClick={playAgain}>Play Again</Button>
      </PopupWrapper>
    </Container>
  );
};

export default Popup;
