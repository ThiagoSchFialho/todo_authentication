import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F4FAFF;
    border: 1px solid #A1CBEC;
    border-radius: 20px;
    box-shadow: 0px 0px 50px 10px #0060af7c;
`;

export const Form = styled(FormikForm)`
    padding: 30px;
`;

export const FormFields = styled.div``;

export const Label = styled.label``;

export const Input = styled(Field)`
    display: block;
    outline: none;
    border: 1px solid #002241;
    border-radius: 3px;
    font-size: 12pt;
    padding: 2px 5px;
    width: 250px;
`;

export const FormFieldGroupContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

export const FormFieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
`;

export const SectionTitle = styled.h2`
    margin-bottom: 10px;
    text-align: center;
`;

export const DescriptionInputContainer = styled.div`

`;

export const DescriptionInput = styled(Field)`
    text-indent: 20px;
    display: block;
    width: 520px;
    min-height: 100px;
    max-height: 200px;
    resize: vertical;
    background-color: #F4FAFF;
    outline: none;
    border: 1px solid black;
    font-size: 12pt;
    padding: 10px;
    border-radius: 3px;
`;

export const ErrorText = styled.p`
    margin: 0;
    color: red;
    font-size: 12px;
`;

export const SubmitButton = styled.button`
    display: block;
    margin: 50px auto 0 auto;
    background-color: #1C5D99;
    color: white;
    font-size: 16pt;
    border: none;
    border-radius: 10px;
    padding: 5px 30px;
    cursor: pointer;
`;