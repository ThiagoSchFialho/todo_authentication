import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
`;

export const InputContainer = styled.div`
    margin-bottom: 0px;
`;

export const Input = styled(Field)`
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #1C5D99;
`;

export const ErrorText = styled.p`
    margin: 0;
    color: red;
    font-size: 12px;
`

export const SubmitButton =  styled.button`
    background-color: #1C5D99;
    color: white;
    font-size: 12pt;
    border: none;
    border-radius: 3px;
    padding: 2px 10px;
    margin-right: 5px;
    cursor: pointer;
`;

export const CancelButton =  styled.button`
    background-color: #99241cff;
    color: white;
    font-size: 12pt;
    border: none;
    border-radius: 3px;
    padding: 2px 10px;
    cursor: pointer;
`;