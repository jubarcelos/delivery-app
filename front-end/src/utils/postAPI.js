import axios from 'axios';

const handleAPI = axios.create({
  baseURL: 'http://localhost:3001',
});

// send = {};
// tag e rote = string;

const setLocalStorageApiData = async (rote, send, tag) => {
  const result = await handleAPI.post('/rote', send)
    .then((response) => response.data)
    .then((data) => localStorage.setItem(tag, JSON.stringify(data)))
    .catch((error) => console.log(error));
  return result;
};

const clearLocalStorage = localStorage.setItem('address', JSON.stringify({}));

export { handleAPI, setLocalStorageApiData, clearLocalStorage };
