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

const Figure = () => {
  return (
    <>
      <Wrapper id="figure-container">
        <Image src="images/1.svg" />
      </Wrapper>
    </>
  );
};

export default Figure;
