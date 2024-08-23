export const changePasswordToken = to => {
  if (!to.query.token) return { name: 'sign-in' };
  return true;
};
