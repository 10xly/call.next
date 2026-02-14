# call.next
A robust, enterprise-grade utility to safely invoke `.next` on generators.

## Installation
```bash
npm install node-call.next
```

## Usage
```js
const call = require("node-call.next")

function* myGeneratorFunction() {
  yield "hello world"
}

const generator = myGeneratorFunction()

console.log(call.next(generator)) // { value: 'hello world', done: false }
```