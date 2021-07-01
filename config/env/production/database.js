module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-54-228-99-58.eu-west-1.compute.amazonaws.com",
        port: env.int("DATABASE_PORT", 5432),
        database: "d5grp0j6skao5",
        username: "aynrhxrdhsaqge",
        password:
          "dde105102b82952d14b8d8505653384e73ea07f37b4a2730a222eae5411fb057",
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
