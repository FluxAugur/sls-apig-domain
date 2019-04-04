const { withStatusCode } = require('../utils/response.util')

const ok = withStatusCode(200, JSON.stringify)

module.exports.get = async event => {
  const currentTime = new Date().toLocaleTimeString()
  const response = {
    message: `The current time is ${currentTime}.`,
    input: event,
  }

  return await ok(response)
}
