
export const STORAGE_KEYS = {
  TOKEN: '@petsapi:token',
  USUARIO: '@petsapi:usuario',
  USUARIO_ID: '@petsapi:usuario_id',
};

export const clearStorage = () => {
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
};

export default STORAGE_KEYS;