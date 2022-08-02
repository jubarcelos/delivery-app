import styled from 'styled-components';

const AdressFormStyle = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65.5%;
  flex-wrap: wrap;
  align-items: flex-end;

  input, select {
    height: 40px;
    width: 100%;
    border: solid 1px #b5b5b5;
    border-radius: 10px;
    margin-top: 5px;
  }

  button {
    background-color: #036B52;
    border-radius: 10px;
    border: solid 1px #b5b5b5;
    color: white;
    height: 44px;
  }
`;

export default AdressFormStyle;
