const { sanitize } = require('@strapi/utils');
const { sanitizeOutput } = require('@strapi/utils/lib/sanitize');

module.exports = {
  async updateMe(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('You must be logged in.');
    }

    try {
      const { username, email, phone_number, birth_date } = ctx.request.body.data;

      const updatedUser = await strapi.db.query('plugin::users-permissions.user').update({
        where: { id: user.id },
        data: { username, email, phone_number, birth_date },
      });

      const sanitized = await sanitizeOutput(updatedUser, ctx);
      return ctx.send(sanitized);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
