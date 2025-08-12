import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import {
    MainContainer,
    FormContainer,
    Form,
    FormTitle,
    InputContainer,
    Label,
    Input,
    ErrorText,
    SubmitButton,
    Redirect,
    TermsText
} from "./styles";

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Por favor, insira um e-mail válido')
        .required('Por favor, informe seu e-mail'),

    password: Yup.string()
        .min(8, 'A senha deve possuir pelo menos 8 caracteres!')
        .required('Por favor, informe sua senha!'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As duas senhas não coincidem')
        .required('Por favor, confirme a senha!')
})

const Signup = () => {
    const navigate = useNavigate();

    const signupUser = (values) => {
        console.log('Usuário cadastrado: ', values);
        navigate('/');
    }
    return (
        <>
            <MainContainer>
                <FormContainer>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        onSubmit={signupUser}
                        validationSchema={validationSchema}
                    >
                    <Form>
                        <FormTitle>Cadastro</FormTitle>

                        <InputContainer>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" name="email" id="email" />
                            <ErrorMessage name='email' component={ErrorText}/>
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="password">Senha</Label>
                            <Input type="password" name="password" id="password" />
                            <ErrorMessage name='password' component={ErrorText}/>
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="confirmPassword">Confirme sua Senha</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" />
                            <ErrorMessage name='confirmPassword' component={ErrorText}/>
                        </InputContainer>

                        <SubmitButton type="submit">Cadastrar</SubmitButton>
                        <Redirect>Já tem conta? <a href="/">entre</a></Redirect>
                    </Form>
                    </Formik>
                    <TermsText>
                        Ao clicar em "Cadastrar" você aceita os <a href="#">termos de uso</a> e as <a href="#">Políticas de privacidade</a>.
                    </TermsText>
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default Signup;