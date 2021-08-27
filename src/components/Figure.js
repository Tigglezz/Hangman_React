import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: aliceblue;
`;

const Image = styled.img`
  transform: scale(1.6, 1.1);
  padding: 1rem;
  width: 80vw;
  height: 55vh;
`;

const Figure = ({ wrongLetters }) => {
  let errors = wrongLetters.length;
  errors = errors <= 6 ? errors : (errors = 6);
  const path = "images/" + errors + ".svg";

  return (
    <>
      <Wrapper>
        <Image src={path} />
      </Wrapper>
    </>
  );
};

export default Figure;
