import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: whitesmoke;
`;

const Image = styled.img`
  padding: 1rem;
  width: 50vw;
  height: 50vh;
`;

const Figure = ({ wrongLetters }) => {
  let errors = wrongLetters.length;
  errors = errors <= 6 ? errors : (errors = 6);
  const path = "images/" + errors + ".svg";

  return (
    <>
      <Wrapper id="figure-container">
        <Image src={path} />
      </Wrapper>
    </>
  );
};

export default Figure;
