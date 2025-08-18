export const useDb = () => {
    const host = import.meta.env.VITE_BACKEND_HOST;
    
    const getTasks = async (userId) => {
        try {
            const response = await fetch(`${host}/tasks?user_id=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            if (!response.ok) {
                console.error(data.error);
                return { error: data.error};
            }

            return (data);

        } catch (error) {
            console.error('Erro na requisição: ', error);
            return {error: 'Erro de conexão com servidor' };
        }
    }

    return { getTasks }
}