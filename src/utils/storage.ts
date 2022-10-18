const storage = localStorage;

export const setItem = (key, value) => {
  storage.setItem(key, value);
};

export const getItem = key => {
  return storage.getItem(key);
};
