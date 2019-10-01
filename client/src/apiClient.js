const baseUrl = 'http://localhost:8080';
<<<<<<< HEAD
const init = {
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
};

class ApiClient {

  static async getMessages() {
      const response  = await fetch(`${baseUrl}/api`, {
          method: 'GET',
          ...init
      });
      return response.json();
  }

  static async addMessage(message) {
      const response  = await fetch(`${baseUrl}/api/message/add`, {
          method: 'POST',
          ...init,
          body: JSON.stringify(message)
      });
      return response.json();
  }
  static async deleteMessage(id) {
      const response  = await fetch(`${baseUrl}/api/message/${id}`, {
          method: 'delete',
          ...init,
      });
      return response.json();
  }

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

export default ApiClient;
=======

class apiClient {

  addMessage = async (data) => {
      const response  = await fetch(`${baseUrl}/api/message/add`, {
          method: 'POST',
          headers: {"content-type": "application/json"},
          mode: 'cors',
          body: JSON.stringify(data)
      })
      return response.json();
  };


  getMessages = async (data) => {
    const response  = await fetch(`${baseUrl}/api`, { //route is specified in  server/api/index
        method: 'GET',
        headers: {"Accept": "application/json"},
        mode: 'cors',
    })
    return response.json();
  };
};




export default new apiClient();
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
