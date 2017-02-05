module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "jsx-quotes": [2, "prefer-single"],
        "react/jsx-curly-spacing": [2, "always"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [0],
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "no-console": ["error", { allow: ["warn", "error"] }]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};