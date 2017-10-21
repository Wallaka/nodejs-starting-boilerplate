import path from "path";

let config = {};

config.dbHost = process.env.MONGO_HOST;
config.dbPort = process.env.MONGO_PORT;
config.dbName = process.env.MONGO_NAME;
config.serverPort = process.env.PORT || 8080;

export default config;
