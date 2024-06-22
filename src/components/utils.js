export const setDataInLS = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
export const getDataFromLS = (key) => {
  return getDataFromLS(JSON.parse(key));
};
