export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (user, password) => ({
  type: UPDATE_USER,
  user,
  password
});
