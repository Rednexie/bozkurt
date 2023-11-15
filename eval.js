// Require the vm module
const vm = require('vm');

// Define a function that takes a code string and an optional context object
function safeEval(code, context) {
  // Create a sandbox object with the context properties
  let sandbox = Object.assign({}, context);

  // Create a script object from the code string
  let script = new vm.Script(code);

  // Create a context object from the sandbox object
  let ctx = vm.createContext(sandbox);

  // Run the script in the context and return the result
  return script.runInContext(ctx);
}

module.exports = safeEval

