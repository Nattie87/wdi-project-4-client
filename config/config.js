module.exports = {
  port: process.env.PORT || 5000,
  db: 'mongodb://localhost/love-app',
  secret: process.env.SECRET || "gosh this is so secret... shhh..."
};
