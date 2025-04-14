class JwtError extends Error {
  constructor(message, statusCode = 401) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

module.exports = JwtError;
