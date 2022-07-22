import axios from 'axios';

const handleAPI = axios.create({
  baseURL: 'http://localhost:3001',
});

// send = {};
// tag e rote = string;
const getOrderId = (rote, send) => {
  const result = handleAPI.post(`/${rote}`, send)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
  return result;
};

const setLocalStorageApiData = (rote, send, tag) => {
  const result = handleAPI.post(`/${rote}`, send)
    .then((response) => response.data)
    .then((data) => localStorage.setItem(tag, JSON.stringify(data)))
    .catch((error) => console.log(error));
  return result;
};

export { handleAPI, setLocalStorageApiData, getOrderId };
