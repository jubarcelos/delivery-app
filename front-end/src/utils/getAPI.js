import { handleAPI } from './postAPI';

const getApiData = async (rote) => {
  const result = await handleAPI.get(`/${rote}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return result;
};

const getApiById = async (rote, id) => {
  const result = await handleAPI.get(`/${rote}/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return result;
};

export { getApiData, getApiById };
