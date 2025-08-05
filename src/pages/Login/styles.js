import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    background-color: #00294E;
`;

export const FormContainer = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    background-color: #F4FAFF;
    border-radius: 20px;
    padding: 20px 50px 40px 50px;
`;

export const FormTitle = styled.h1`
    font-size: 20pt;
    margin-bottom: 30px;
    text-align: center;
`;

export const InputContainer = styled.div`
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 2px;
    border: 1px solid #1C5D99;
`;

export const FormOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const CheckInput = styled.input`
    margin-right: 5px;
    cursor: pointer;
`;

export const CheckLabel = styled.label`
    cursor: pointer;
`;

export const SubmitButton =  styled.button`
    width: 100%;
    display: block;
    margin: 0 auto;
    background-color: #1C5D99;
    color: white;
    font-size: 16pt;
    border: none;
    border-radius: 10px;
    padding: 10px 40px;
    cursor: pointer;
`;