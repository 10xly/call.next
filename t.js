const call = require(".")

function* myGeneratorFunction() {
  yield "hello world"
}

const generator = myGeneratorFunction()

console.log(call.next(generator))