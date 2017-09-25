const robot = require('robotjs')

const keyFunctionMapping = {
  'Home': typeHelloWorld
}

function typeHelloWorld() {
  robot.typeString('Hello World')
}

module.exports = keyFunctionMapping
