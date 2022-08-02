const getLocalStorage = () => JSON.parse(localStorage.getItem('user'));
const clearLocalStorage = () => localStorage.setItem('address', JSON.stringify({}));

export { getLocalStorage, clearLocalStorage };
