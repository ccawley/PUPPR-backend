// Update with your config settings.
const path = require("path")
require("dotenv").load()

module.exports = {
  development: {
    client: "pg",
    connection: `postgres://localhost/${process.env.DATABASE_NAME}`
  }
};
