module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DATABASE || 'reciples',
    user: process.env.DBUSER || 'www',
    password: process.env.DBPASWD || 'www',
    options: {
      dialect: process.env.DBDIALECT || 'sqlite',
      host: process.env.DBHOST || 'localhost',
      storage: process.env.DBSTORAGE || './reciples.sqlite'
    }
  },
  auth: {
    jwtsecret: process.env.JWTSECRETE || '$eCrE!E'
  },
  productssrv: {
    host: process.env.PRODSRVHOST || 'http://54.37.74.255:8080',
    secrete: process.env.PRODSRVSECRETE || 't1!rew#pp3e1_!s'
  }
}
