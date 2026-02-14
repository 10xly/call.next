const isGenerator = require("is-generator")
const not = require("es-logical-not-operator")
const $TypeError = require("es-error-intrinsics/TypeError")
const construct = require("construct-new")
const just = require("basic-functions")
const ar = require("as-array")
const apply = require("uncurry-x")(require("function.apply-x"))
const one = require("@positive-numbers/one")
const returnArguments = require("return-arguments")

const call = (module.exports = {
  next: function callDotNext(generator) {
    if (not(isGenerator(generator))) {
      return just.throw(
        construct({
          target: $TypeError,
          args: ar(
            "callDotNext expects something with a next method and a thrrow method - a generator"
          )
        })
      )
    }
    const next = generator.next
    return apply(next, generator, apply(returnArguments.asArray, null, arguments).slice(one))
  }
})

call.next.toString()