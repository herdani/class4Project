const isLocalHost = () => {
    return (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    );
};

const baseUrl = isLocalHost() ? 'http://localhost:8080/api' : null;

const init = {
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
};

class Api {
    static async getMessages() {
        const response = await fetch(`${baseUrl}/`, {
            method: 'GET',
            ...init,
        });

        return response.json();
    }

    static async addMessage(message) {
        const response = await fetch(`${baseUrl}/message/add`, {
            method: 'POST',
            ...init,
            body: JSON.stringify(message),
        });
        return response.json();
    }

    static async getMessage(id) {
        const response = await fetch(`${baseUrl}/message/${id}`, {
            method: 'GET',
            ...init,
        });
        return response.json();
    }

    // static async editTodo(id, todo) {
    //     const response = await fetch(`${baseUrl}/todos/${id}`, {
    //         method: 'PUT',
    //         ...init,
    //         body: JSON.stringify(todo),
    //     });
    //     return response.json();
    // }

    // static async deleteTodo(id, todo) {
    //     const response = await fetch(`${baseUrl}/todos/${id}`, {
    //         method: 'DELETE',
    //         ...init,
    //     });
    //     return response.json();
    // }
}

export default Api;
