module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'krezaproject',
      database: 'books'
    },
    pool: { 
      min: 0,
       max: 7 
    },
    migrations: {
      directory: 'db/migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: '***',
      user: '***',
      password: '***',
      database: '***'
    },
    pool: { 
      min: 0,
       max: 7 
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }

};
