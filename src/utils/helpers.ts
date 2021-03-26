export const setItem = ({ key, data }: any) => localStorage.setItem(key, JSON.stringify(data))
export const getItem = (key: string) => {
    const user = localStorage.getItem(key)
    return user !== undefined ? user !== null ? JSON.parse(user) : undefined : undefined;
    
}
export const removeItem = (key: string) => localStorage.removeItem(key)