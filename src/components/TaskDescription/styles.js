import styled from "styled-components";
import { Field, Form as FormikForm } from 'formik';

export const TaskCard = styled.div`
    width: 350px;
    background-color: #F4FAFF;
    margin: 10px;
    padding: 20px;
    padding-right: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px #0060af7c;
`;

export const EditToggleContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
`;

export const TaskTitle = styled.h1`
    font-size: 16pt;
    margin-bottom: 20px;
    font-weight: 700;
`;

export const TaskInfo = styled.p`
    margin-bottom: 5px;
`;

export const SectionTitle = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
`;

export const TaskDescriptionText = styled.p`
    text-indent: 20px;
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 25px;
`;

export const FooterList = styled.div`
    list-style: none;
`;

export const FooterAction = styled.div`
    color: #ca3d3dff;
    font-weight: 600;
    cursor: pointer;
`;

export const Form = styled(FormikForm)``;

export const FormFields = styled.div``;

export const TaskTitleInput = styled(Field)`
    background-color: #F4FAFF;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #002241;
    font-size: 16pt;
    font-weight: 700;
`;

export const FormFieldGroup = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
`;

export const DateInput = styled(Field)`
    display: inline-block;
    background-color: #F4FAFF;
    outline: none;
    border: none;
    font-size: 12pt;
    margin-bottom: -2px;
`;

export const TimeInput = styled(Field)`
    display: inline-block;
    background-color: #F4FAFF;
    outline: none;
    border: none;
    font-size: 12pt;
    margin-bottom: -2px;
`;

export const CategorySelect = styled(Field)`
  display: inline-block;
  width: 200px;
  background-color: #F4FAFF;
  outline: none;
  border: none;
  font-size: 12pt;
  border-radius: 4px;
`;

export const DescriptionInput = styled(Field)`
    text-indent: 20px;
    display: block;
    width: 100%;
    min-height: 100px;
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
