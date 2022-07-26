import styled from 'styled-components';

const HeaderStyled = styled.nav`
  background-color: grey;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    margin: 10px;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
`;

export default HeaderStyled;
