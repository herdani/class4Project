const baseUrl = 'http://localhost:8080';
const init = {
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
};

class apiClient {

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


}

export default new apiClient;
