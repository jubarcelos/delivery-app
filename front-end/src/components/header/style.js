import styled from 'styled-components';

const HeaderStyled = styled.nav`
  background-color: #036B52;
  display: flex;
  justify-content: space-between;

  div {
    align-items: center;
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

  .title {
    align-items: center;
    color: white;
    font-size: 25px;
    text-align: center;
    width: 250px;
  }

  #user {
    background-image: linear-gradient(
      to right, #421981 55%,#056CF9 0
    );
  }
`;

export default HeaderStyled;
