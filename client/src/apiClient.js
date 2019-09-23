const baseUrl = 'http://localhost:8080';

class apiClient {

  addMessage = async (data) => {
      const response  = await fetch(`${baseUrl}/api/message/add`, {
          method: 'POST',
          headers: {"content-type": "application/json"},
          mode: 'cors',
          body: JSON.stringify(data)
      })
      console.log(response.body);
      return response.json();
  };
};
export default new apiClient();
