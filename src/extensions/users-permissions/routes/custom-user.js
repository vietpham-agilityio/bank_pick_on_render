module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/users/me',
      handler: 'user.updateMe',
      config: {
        auth: true,
      },
    },
  ],
};
