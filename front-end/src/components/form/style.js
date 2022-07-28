import styled from 'styled-components';

const FormStyle = styled.form`
  align-content: center;
  display: flex;
  flex-direction: column;
  
  h1 {
    color: #036B52;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    margin-top: 10%;
    text-align: center;
  }

  #bg-form {
    border: solid 1px #b5b5b5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto auto auto;
    padding: 3%;
    text-align: center;
    width: 30%;
  }

  .input-login {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }

  input {
    border: solid 1px #b5b5b5;
    border-radius: 10px;
    height: 30px;
    margin-top: 5px;
    text-align: center;
  }

  button {
    background-color: #036B52;
    border-radius: 10px;
    border: solid 1px #b5b5b5;
    color: white;
    height: 60px;
    margin: 15px;
  }

  #btn-register {
    background-color: #ededed;
    border: solid 2px #036B52;
    height: 30px;
    margin-top: 0;
  }

  a {
    color: #036B52;
    text-decoration: none;
  }
`;

export default FormStyle;
