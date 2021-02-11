module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '88.99.226.150'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'sundhedsbrok'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'BzEjbyZyK4vdtAn8'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
