import styled from "styled-components";

export const WraperForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 500px;
    border: 4px solid blue;
    border-radius: 8px;
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
export const BtnSubmit = styled.button`
    margin: 10px;
    font-size: 26px;
    width: 205px;
    height: 35px;
    background-color: #c6d6eb;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
`