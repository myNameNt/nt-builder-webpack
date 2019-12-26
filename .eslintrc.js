module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  "extends": ['airbnb'],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "semi": "error",
    "indent": ['error', 2]
  }
}