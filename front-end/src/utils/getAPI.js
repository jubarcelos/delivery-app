import { handleAPI } from './postAPI';

const getApiData = async (rote, send) => {
  const result = await handleAPI.post('/rote', send)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return result;
};

const getApiById = async () => {
  const result = await handleAPI.post('/', send)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return result;
};

export { getApiData, getApiById };
