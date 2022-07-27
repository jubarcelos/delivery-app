import axios from 'axios';

const handleAPI = axios.create({
  baseURL: 'http://localhost:3001',
});

// send = {};
// tag e rote = string;
const getOrderId = (rote, send, token) => {
  handleAPI.defaults.headers.Authorization = token;
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

const setApiDataStatusCode = async (route, send, token) => {
  let statusCode = 0;
  if (route.includes('admin')) handleAPI.defaults.headers.Authorization = token;
  await handleAPI.post(`/${route}`, send)
    .then((response) => {
      statusCode = response.status;
      return response.data;
    })
    .then((data) => {
      if (!route.includes('admin')) localStorage.setItem('user', JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
      statusCode = error.response.status;
    });

  return statusCode;
};

export { handleAPI, setLocalStorageApiData, getOrderId, setApiDataStatusCode };
