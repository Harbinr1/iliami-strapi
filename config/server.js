const crypto = require('crypto');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [crypto.randomBytes(64).toString('hex')]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },

  // Add or update the configuration for the users-permissions plugin
  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'yourGeneratedJwtSecret'),
  },
});
