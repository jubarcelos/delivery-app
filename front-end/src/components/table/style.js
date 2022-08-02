import styled from 'styled-components';

export const TableStyle = styled.div`
  margin: 10px;
  text-align: center;

  table {
    border-collapse: collapse;
  }

  thead {
    height: 50px;
  }

  th {
    border: none;
    width: 170px;
  }
  
  tr {
    height: 40px;
  }

  #table-header {
    background-color: none;
  }

  button {
    background-color: #2FC18C;
    border: none;
    padding: 8%;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonTotalStyles = styled.div`
  align-items: center;
  background-color: #036B52;
  border-radius: 3px;
  border: solid 1px #b5b5b5;
  bottom: 12px;
  color: white;
  display: flex;
  font-size: 20px;
  height: 55px;
  justify-content: center;
  position: fixed;
  right: 19px;
  width: 20%;
  text-align: center;
`;
