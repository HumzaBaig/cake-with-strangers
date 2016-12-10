export const updateUserBackend = (user, password, success, error) => {
  $.ajax({
    type: "PATCH",
    url: `api/users/${user.id}`,
    data: { user, password },
    success,
    error
  });
};
