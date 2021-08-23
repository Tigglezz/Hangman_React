import React from "react";
import styled from "styled-components";

const Head = styled.div`
  background-color: lightcyan;
`;

const Header = () => {
  return (
    <>
      <Head>
        <h1>Hangman</h1>
        <p>Enter a letter</p>
      </Head>
    </>
  );
};

export default Header;
