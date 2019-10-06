const baseUrl = 'http://localhost:8080';
const init = {
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
};

class apiClient {
<<<<<<< HEAD

getMessages= async () => {
      const response  = await fetch(`${baseUrl}/api`, {
          method: 'GET',
          ...init
      });
      return response.json();
  };

  addMessage = async (message) => {
      const response  = await fetch(`${baseUrl}/api/message/add`, {
          method: 'POST',
          ...init,
          body: JSON.stringify(message)
      });
      return response.json();
  };
   
  deleteMessage = async (id) => {
      const response  = await fetch(`${baseUrl}/api/message/${id}`, {
          method: 'delete',
      });
      return response.json();
  };

  // static async getTodo(id) {
  //     throw 'I do not have an implementation yet';
  // }

  // static async editTodo(id, todo) {
  //     throw 'I do not have an implementation yet';
  // }

  // static async deleteTodo(id, todo) {
  //     throw 'I do not have an implementation yet';
  // }


=======
    addMessage = async data => {
        const response = await fetch(`${baseUrl}/api/message/add`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(data),
        });
        return response.json();
    };

    getMessages = async data => {
        const response = await fetch(`${baseUrl}/api`, {
            //route is specified in  server/api/index
            method: 'GET',
            headers: { Accept: 'application/json' },
            mode: 'cors',
        });
        return response.json();
    };

    deleteMessage = async id => {
        const response = await fetch(`${baseUrl}/api/message/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    };
>>>>>>> ff7064e713a999216bc78b260d6a6b9a5ae26239
}

export default new apiClient;
