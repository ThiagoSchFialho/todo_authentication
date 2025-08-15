import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import PopUpMessage from "../../components/PopUpMessage/PopUpMessage";
import {
    MainContainer,
    Form,
    FormTitle,
    InputContainer,
    Label,
    Input,
    ErrorText,
    FormOptions,
    CheckInput,
    CheckLabel,
    SubmitButton,
    Redirect
} from "./styles";

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Por favor, insira um e-mail válido')
        .required('Por favor, informe seu e-mail'),

    password: Yup.string()
        .required('Por favor, informe sua senha!')
})

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [ loginError, setLoginError ] = useState(null);

    const handleLogin = async (values) => {
        setLoginError(null);
        const result = await login(values);

        if (result.success) {
            navigate('/home');
        } else {
            setLoginError('Credenciais Incorretas');
        }
    }

    return (
        <>
            <MainContainer>
                {loginError &&
                    <PopUpMessage type="error" message="Credenciais incorretas"/>
                }
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >
                <Form>
                    <FormTitle>Login</FormTitle>

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

                    <FormOptions>
                        <div>
                            <CheckInput type="checkbox" name="remember_me" id="remember_me" />
                            <CheckLabel htmlFor="remember_me">Lembre de mim</CheckLabel>
                        </div>
                        <span><a href="#">Esqueceu a senha?</a></span>
                    </FormOptions>

                    <SubmitButton type="submit">Entrar</SubmitButton>
                    <Redirect>Novo aqui? <a href="/signup">Cadastre-se</a></Redirect>
                </Form>
                </Formik>
            </MainContainer>
        </>
    )
}

export default Login;