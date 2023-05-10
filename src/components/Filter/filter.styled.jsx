import styled from "styled-components";

export const WraperFilter = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 15px;
    border: 3px solid blue; 
    border-radius: 7px;
`
export const Label = styled.label`
    margin: 0 10px;       
    `
export const Input = styled.input`
    margin: 10px;
    font-size: 26px;
    width: 200px;
    height: 35px;
    border-radius: 7px;
    border-color: #60a1fb;
    &:hover {
    border-color: #1047c7;
  }
`