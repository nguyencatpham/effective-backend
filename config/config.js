const config = {
    env: 'development',
    host:'localhost',
    port: '2508',
    mysql: {
        dialect: 'mysql',
        host: 'localhost:3306',
        database: 'study-effective',
        username: 'root',
        password: '123456',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    },
    mssql: {
        dialect: 'mssql',
        host: '',
        database: '',
        username: '',
        password: '',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    },
    postgres: {
        dialect: 'postgres',
        host: '',
        database: '',
        username: '',
        password: '',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    },
    sqlite: {
        dialect: 'sqlite',
        // SQLite only
        storage: 'path/to/database.sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    }
};

export default config;