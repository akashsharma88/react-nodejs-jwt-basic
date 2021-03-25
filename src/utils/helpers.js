export const setItem = ({ key, data }) => localStorage.setItem(key, JSON.stringify(data))
export const getItem = (key) => localStorage.getItem(key) !== undefined ? JSON.parse(localStorage.getItem(key)) : undefined;
export const removeItem = (key) => localStorage.removeItem(key)