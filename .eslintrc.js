module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mongo": true,
    "jest": true,
  },
  "rules": {
    "no-console": "off",
    "no-debugger": "off",
    // "prefer-destructuring": "off",
    // "import/extensions": [".js", ".jsx"],
    // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    // "no-undef": "off",
    // "no-underscore-dangle": "off",
    "no-unused-vars": "warn",
    // "block-scoped-var": "off",
    // "no-plusplus": "off",
    // "jsx-a11y/click-events-have-key-events": "off",
    // "jsx-a11y/no-noninteractive-element-interactions": "off",

    // "jsx-a11y/label-has-associated-control": "off",
    // "jsx-a11y/label-has-for": "off",
    // "jsx-a11y/mouse-events-have-key-events": "off",
    // "react/destructuring-assignment": "off",
    "react/prop-types": "warn",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  },
  "settings": {
    "react": {
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
    },
  }
};