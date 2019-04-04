const { withStatusCode } = require('../utils/response.util')

const ok = withStatusCode(200, JSON.stringify)

module.exports.get = async event => {
  const response = {
    message: `Hello, world! Greetings from the ${process.env.SERVICE_NAME} service!`,
    input: event,
  }

  return await ok(response)
}
