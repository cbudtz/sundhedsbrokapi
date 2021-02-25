'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async inc(ctx) {
    let result = await strapi
      .query('brok')
      .model.query(qb=>{
        qb.where('id',ctx.params.id).increment('likes',1);
      }).fetch();
    return result.toJSON();
  }
};
