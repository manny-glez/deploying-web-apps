import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(4px + 2vmin);
  color: white;
  border-bottom: 1px solid rgb(61, 61, 61);
`

function Header() {
  return (
    <StyledHeader>
      <h1>Space Photo of The Day<span role="img" aria-label='go!'> 🚀</span></h1>
    </StyledHeader>
  );
}

export default Header;
