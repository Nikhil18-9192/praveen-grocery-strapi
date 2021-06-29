module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-54-155-87-214.eu-west-1.compute.amazonaws.com",
        port: env.int("DATABASE_PORT", 5432),
        database: "d2mbiu1iidnrm5",
        username: "rawihgshmlqmpg",
        password:
          "82796aa4f0d02a207dcc30fd7922d3b090f801b9099d6e10136df20464999fab",
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
