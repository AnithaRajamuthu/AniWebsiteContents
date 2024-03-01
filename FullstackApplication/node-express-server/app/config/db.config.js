module.exports = {
  HOST: "testdb.c1goi8o4aaao.us-east-1.rds.amazonaws.com",
  USER: "root",
  PASSWORD: "root1234",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
