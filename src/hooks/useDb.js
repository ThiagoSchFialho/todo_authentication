export const useDb = () => {
    const host = import.meta.env.VITE_BACKEND_HOST;

    const getCategories = async (userId) => {
        try {
            const response = await fetch(`${host}/categories?user_id=${userId}`, {
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

    const createCategory = async (values) => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await fetch(`${host}/categories?user_id=${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = response.json()

            if (!response.ok) {
                console.error(data.error);
                return { error: data.error};
            }

            return { success: false, error: data.error || 'Falha ao criar categoria' };

        } catch (error) {
            console.error('Erro na requisição: ', error);
            return {error: 'Erro de conexão com servidor' };
        }
    }
    
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

    const deleteTask = async (id) => {
        const user_id = localStorage.getItem('userId');

        try {
            const response = await fetch(`${host}/tasks/${id}?user_id=${user_id}`, {
                method: 'DELETE',
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

    return { getCategories, createCategory, getTasks, updateStatusTask, deleteTask }
}