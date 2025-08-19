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

    const updateStatusTask = async (id) => {
        const user_id = localStorage.getItem('userId');
        
        try {
            const response = await fetch(`${host}/tasks/done/${id}?user_id=${user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = response.json();

            if (!response.ok) {
                console.error(data.error);
                return { error: data.error};
            }

            return { sucess: true }
            
        } catch (error) {
            console.error('Erro na requisição: ', error);
            return {error: 'Erro de conexão com servidor' };
        }
    }

    return { getTasks, updateStatusTask }
}