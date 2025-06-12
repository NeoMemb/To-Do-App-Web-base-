I'll be using JSDoc-style comment.
It can be used as follows:
> /**
   * Description about the program (function or document)
   * @param {data type}
   * @return - what it returns
   *
   */

# Importing a File/Module, either CommonJS or ES Module syntax can be used:

## In commonJS:
- To export a file, we add this at the last line of the file we want export ```module.exports = allFunctionsAndValuesToBeExport;```.
- To import a file, we use, ```const math = require('./mathUtil.js')```
- You can also use destructuring to import: ```const { add, substract } = require(`./mathUtil.js`)```

## In ES Module syntax:
- We make use of `export`, `export {add, substraction}`
- To import them, we use `import {add, substraction as subst} from "./mathUtil.js"`

To use ES Module syntax:
- You rename the file extension that will use the module to be `.mjs` instead of `.js` ( e.g`testFile.mjs`).
- In the package.json file, add `"type": "module"`.