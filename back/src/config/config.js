module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DATABASE || 'reciples',
    user: process.env.DBUSER || 'www',
    password: process.env.DBUSER || 'www',
    options: {
      dialect: process.env.DBDIALECT || 'sqlite',
      host: process.env.DBHOST || 'localhost',
      storage: './reciples.sqlite'
    }
  }
}
