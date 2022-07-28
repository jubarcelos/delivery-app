import styled from 'styled-components';

const CardStyle = styled.div`
  align-items: center;
  border-radius: 3px;
  border: solid 1px #b5b5b5;
  display: flex;
  flex-direction: column;
  margin: 14px;
  width: 18%;

  img {
    border-radius: 3px;
    margin-top: 4%;
  }

  #infos {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  #div-qty {
    align-items: center;
    display: flex;
    padding-bottom: 5%;
    width: 90%;
  }

  input, button {
    border-radius: 3px;
    border: solid 1px #b5b5b5;
    height: 40px;
    margin: 1px;
    text-align: center;
    width: 32%;
  }

  button {
    background-color: #036B52;
    border: none;
    color: white;
    font-size: 20px;
    height: 42px;
  }
`;

export default CardStyle;
