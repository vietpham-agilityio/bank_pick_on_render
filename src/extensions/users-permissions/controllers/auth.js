const authController = require('@strapi/plugin-users-permissions/server/controllers/auth');

module.exports = {
  ...authController,
  async register(ctx) {
    // Call the default register
    const response = await authController.register(ctx);

    // After registration, attach phone_number if provided
    const { phone_number } = ctx.request.body;

    if (phone_number && response.user) {
      await strapi.entityService.update('plugin::users-permissions.user', response.user.id, {
        data: {
          phone_number,
        },
      });
    }

    return response;
  },
};
