import { useNavigate } from "react-router-dom";
import {
    MainContainer,
    FormContainer,
    FormTitle,
    InputContainer,
    Label,
    Input,
    FormOptions,
    CheckInput,
    CheckLabel,
    SubmitButton
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <MainContainer>
                <FormContainer>
                    <FormTitle>Login</FormTitle>

                    <InputContainer>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" required />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" name="password" id="password" required />
                    </InputContainer>

                    <FormOptions>
                        <div>
                            <CheckInput type="checkbox" name="remember_me" id="remember_me" />
                            <CheckLabel htmlFor="remember_me">Lembre de mim</CheckLabel>
                        </div>
                        <span><a href="#">Esqueceu a senha?</a></span>
                    </FormOptions>

                    <SubmitButton type="submit" onClick={() => navigate('/home')}>Entrar</SubmitButton>
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default Login;