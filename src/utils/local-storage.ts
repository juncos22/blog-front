const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const LocalStorageUtils = {
  setItem,
  getItem,
  removeItem,
};
