import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const MainContainer = styled.div`
    height: 100vh;
    background-color: #00294E;
`;

export const FormContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Form = styled(FormikForm)`
    margin: 0 auto;
    width: 450px;
    background-color: #F4FAFF;
    border-radius: 20px;
    padding: 20px 50px;
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

export const Input = styled(Field)`
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #1C5D99;
`;

export const ErrorText = styled.p`
    margin: 0;
    color: red;
    font-size: 12px;
`;

export const SubmitButton = styled.button`
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

export const Redirect = styled.p`
    margin-top: 15px;
    text-align: center;
`;

export const TermsText = styled.p`
    width: 450px;
    text-align: center;
    margin-top: 20px;
    color: white;

    a {
        color: white;
    }
`;