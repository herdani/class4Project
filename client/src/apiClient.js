const baseUrl = 'http://localhost:8080';

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