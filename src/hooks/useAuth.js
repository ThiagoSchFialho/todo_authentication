import { jwtDecode } from 'jwt-decode';

const getUserIdFromToken = (token) => {
  if (!token) return null;
  
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId;
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
}

export const useAuth = () => {
    const host = import.meta.env.VITE_BACKEND_HOST;
    
    const login = async (values) => {
        try {
            const response = await fetch(`${host}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();

            if (!response.ok || !data.token) {
                console.error('Erro no login: ', data.error || 'Resposta inválida');
                return { success: false, error: data.error || 'Falha no login' };
            }

            localStorage.setItem('token', data.token)

            const userId = getUserIdFromToken(data.token);
            if (userId) {
                localStorage.setItem('userId', userId);
            }

            return { success: true, token: data.token };
            
        } catch (error) {
            console.error('Erro na requisição: ', error);
            return { success: false, error: 'Erro de conexão com servidor' };
        }
    }

    const signup = async (values) => {
        try {
            const response = await fetch(`${host}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();

            if (!response.ok) {
                console.error('Erro no cadastro: ', data.error || 'Resposta inválida');
                return { success: false, error: data.error || 'Falha no cadastro' };
            }

            return { success: true };
            
        } catch (error) {
            console.error('Erro na requisição: ', error);
            return { success: false, error: 'Erro de conexão com servidor' };
        }

    }

    return { login, signup }
}