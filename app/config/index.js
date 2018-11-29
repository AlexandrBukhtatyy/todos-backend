module.exports = {
    NAME: process.env.APP_NAME,
    PORT: process.env.APP_PORT,
    REDIS_HOST: process.env.APP_REDIS_HOST,
    REDIS_PORT: process.env.APP_REDIS_PORT,
    DB_HOST: process.env.APP_DB_HOST,
    DB_USER: process.env.APP_DB_USER,
    DB_PASS: process.env.APP_DB_PASS,
    DB_NAME: process.env.APP_DB_NAME,
    DB_PORT: process.env.APP_DB_PORT,
    APP_SECRET: process.env.APP_SECRET || 'someSecretWord'
};