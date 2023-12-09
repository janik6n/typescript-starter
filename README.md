# TypeScript Starter 🔋

This is my batteries included generic TypeScript starter, with:
- 🟩 [Node.js](https://nodejs.org/) 20
- ✏️ [TypeScript](https://www.typescriptlang.org/) 5.3
- 📚 ECMAScript Modules
- ⚙️ NPM package manager
- 🚥 testing with [Jest](https://jestjs.io)
- 📦 bundling with [esbuild](https://esbuild.github.io/)
- ⚗️ Code linting & formatting with [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- 🔬 [VS Code](https://code.visualstudio.com/) configuration for debugging

## ✅ Prerequisites

- Make sure you have Node.js installed. This is built, configured and tested with `Node.js 20`.
- Install VS Code, and the following extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## 📌 Getting started

How to use this template?

1. Make sure prerequisites are met.
2. Clone this repository.
3. Delete `package-lock.json`.
3. Replace janik6n in `package.json` with your own username.
3. Install dependencies by running `npm install` on the project root directory.
4. Start developing. See below for available scripts.

### ⚙️ Run development server

To run TypeScript to JavaScript transpiling and run `index.js` in watch mode (a.k.a. continuosly), run `npm run dev`.

### 🚥 Run tests

To run tests, you have a couple of options:
- run `npm run test`
- to include coverage report, run `npm run test:cov`
- to run tests in watch mode, run `npm run test:watch` in separate terminal session than your development server.

### ⚗️ Lint source code

Lint a.k.a. check the formatting of the source code with `npm run lint`.

Basic idea is to run ESLint & Prettier on VS Code as you code, so this script is mostly for code quality checks in CI. Prettier is run as ESLint plugin.

### 📦 Build production bundle

Build the production bundle with esbuild by running `npm run build`. Build is configured in `build.js`.

*Future plans: build as Docker container with `npm run build:container`.*

### ⚙️ Serve production bundle

Serve the built app with `npm run serve`.

## 🐛 Known issues

- Jest module mocking does not work. Haven't been able to figure out yet what's the issue with this. Most likely related to https://github.com/kulshekhar/ts-jest/issues/4207.

## 📚 Further reading

### Jest

- https://jestjs.io/docs/getting-started#using-typescript
- https://jestjs.io/docs/ecmascript-modules
- https://kulshekhar.github.io/ts-jest/

### VSCode TS debugging

- https://code.visualstudio.com/docs/typescript/typescript-debugging

### VSCode debugging & Jest

- https://github.com/jest-community/vscode-jest
- https://sixty-north.com/blog/jest-vscode-env-vars.html
- https://github.com/microsoft/vscode-recipes/tree/main/debugging-jest-tests
- https://code.visualstudio.com/docs/editor/debugging#_launch-configurations
- https://github.com/jest-community/vscode-jest#runmode

## 🔁 Changelog

[CHANGELOG](CHANGELOG.md)

## ⚖️ License

MIT [License](LICENSE). Copyright janik6n.
