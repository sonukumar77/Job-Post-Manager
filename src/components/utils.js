import { LS_POST_MANAGER_KEY } from "./constants";

export const setDataInLS = (value) => {
  if (value) {
    return localStorage.setItem(LS_POST_MANAGER_KEY, JSON.stringify(value));
  } else {
    return null;
  }
};

export const getDataFromLS = () => {
  const lsPostManagerData = JSON.parse(
    localStorage.getItem(LS_POST_MANAGER_KEY)
  );
  if (lsPostManagerData) {
    return lsPostManagerData;
  } else {
    return [];
  }
};
