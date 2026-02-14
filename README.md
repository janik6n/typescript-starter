![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Node.js](https://shields.io/badge/Node.js-417e38?logo=nodedotjs&logoColor=FFF&style=flat-square)
![ESLint](https://shields.io/badge/ESLint-4b32c3?logo=eslint&logoColor=FFF&style=flat-square)
![Prettier](https://shields.io/badge/Prettier-f8bc45?logo=prettier&logoColor=FFF&style=flat-square)
![Vitest](https://shields.io/badge/Vitest-acd268?logo=vitest&logoColor=FFF&style=flat-square)
![Esbuild](https://shields.io/badge/Esbuild-ffcf00?logo=esbuild&logoColor=FFF&style=flat-square)
![Docker](https://shields.io/badge/Docker-1D63ED?logo=Docker&logoColor=FFF&style=flat-square)
![VS Code](https://shields.io/badge/VS%20Code-0078d4?style=flat-square)
![GitHub](https://shields.io/badge/GitHub-000?logo=github&logoColor=FFF&style=flat-square)
[![Build Status](https://github.com/janik6n/typescript-starter/workflows/Code%20quality%20checks/badge.svg)](https://github.com/janik6n/typescript-starter/actions)

# TypeScript Starter 🔋

This is my batteries included TypeScript starter updated for 2026, with:
- 🟩 [Node.js](https://nodejs.org/) 24 (LTS)
- ✏️ [TypeScript](https://www.typescriptlang.org/) 5.9
- 📚 ECMAScript Modules
- ⚙️ NPM package manager
- ⚗️ code linting & formatting with [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- 🚥 testing with [Vitest](https://vitest.dev/)
- 🔬 [VS Code](https://code.visualstudio.com/) configuration for debugging and testing
- 🔥 hot reloading
- 📦 production bundling with [esbuild](https://esbuild.github.io/)
- 🐳 production ready [Docker](https://www.docker.com/) image build
- 🔁 GitHub Actions workflow to run code quality checks and tests

This starter is more geared towards backend than frontend use.

## ✅ Prerequisites

- Make sure you have Node.js 24 installed. This is built, configured and tested with `Node.js 24`.
- If you want to use VS Code, make sure the following extensions are installed and configured:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

## 📌 Getting started

How to use this template?

1. Make sure prerequisites are met.
2. Download the repository as zip so you don't have to deal with git history of this repository.
3. Delete `package-lock.json`.
3. Replace `janik6n` in `package.json` with your own username, along with other info.
3. Install dependencies by running `npm install` on the project root directory.
4. Start developing. See below for available scripts.

## Available scripts

Following scripts have been configured, and they should give ideas for further development.

### ⚙️ Run development server

To run TypeScript to JavaScript transpiling and to run transpiled `./dist/index.mjs` run `npm run dev`. Watch mode (a.k.a. *hot reloading* 🔥) is available with `npm run dev:watch`. Development serving is handled with [tsx](https://tsx.is/).

### 🚥 Run tests

Test are run with [Vitest](https://vitest.dev/), and different test scenarios are handled with [Test Projects](https://vitest.dev/guide/projects).

To run tests, you have a several of options:
- Run all tests with `npm run test`.
- Include coverage report with `npm run test:cov`.
- Run unit tests with `npm run test:unit`. This runs all tests which are in files with name `*.unit.test.ts`.
- Run integration tests with `npm run test:integration`. This runs all tests which are in files with name `*.integration.test.ts`.
- Run end-to-end (e2e) tests with `npm run test:e2e`. This runs all tests which are in files with name `*.e2e.test.ts`.
- Run unit and integration tests in watch mode with `npm run test:watch` in separate terminal session than your development server.
- Run unit and integration tests in CI environment with `npm run test:ci`. Note: this script exists so it's easy to configure which tests are run in CI.

### ⚗️ Lint source code

Lint a.k.a. check the formatting of the source code with `npm run lint`.

The idea is to run [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) on VS Code as you code, so this script is mostly for code quality checks in CI. Prettier is run as ESLint plugin.

### 🛠️ Format source code

Format the source code with [Prettier](https://prettier.io/) by running `npm run format`.

### 📦 Build production bundle

Build the production bundle with [esbuild](https://esbuild.github.io/) by running `npm run build`. Build is configured in `build.js`.

Build command explained: `"build": "rimraf ./dist && npx tsc --noEmit && node build.js"`:
- `rimraf ./dist`: delete ./dist folder
- `npx tsc --noEmit`: run type checks
- `node build.js`: build and bundle with esbuild, which does not do type checking, but it creates nice small bundles

Sometimes it's necessary to see the built app with just transpiling without bundling. This can be accomplished with `npm run build:tsc`.

### 🚀 Run production bundle

Run the built app with `npm run start`.

### 🐳 Check container build for issues

Run `npm run check:container` to check Docker build for issues, without actually building the image. `Dockerfile` is configured so that failing checks will exit with error status. See [Build checks | Docker Docs](https://docs.docker.com/build/checks/) for more info.

### 🐳 Build as container

Run `npm run build:container` to build the app as Docker container. Multi-stage build is used to minimize the production image size. Debian-based image is used to minimize the risk of compatibility issues.

### 🐳 Run as container

Run the containerized app with `npm run start:container`.

## 🔬 Available VS Code configurations

There are two debugger launch configurations included:
- `Debug Current File` is meant to debug the currently active TypeScript file.
- `Debug Current Test File` is same, but for test files.

## 🐛 Known issues

None as of now. 🦗

## ✂️ What’s not inside

Here are some things that *could be included* in a starter, but are not in this one:
- Monorepo setup
- Any particular app’s source code
- Git pre-commit hooks

## 📚 Further reading

### TypeScript

- https://www.typescriptlang.org/

### ESLint & Prettier

- https://eslint.org/
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://prettier.io/
- https://github.com/prettier/eslint-plugin-prettier
- https://typescript-eslint.io/

### Vitest

- https://vitest.dev/
- https://vitest.dev/guide/projects

### VS Code TS debugging & Vitest

- https://code.visualstudio.com/docs/typescript/typescript-debugging
- https://code.visualstudio.com/docs/editor/testing
- https://code.visualstudio.com/docs/editor/debugging#_launch-configurations
- https://marketplace.visualstudio.com/items?itemName=vitest.explorer
- https://vitest.dev/guide/debugging

### Tsx

- https://tsx.is/

### Esbuild

- https://esbuild.github.io/

### Docker & Node.js

- https://hub.docker.com/_/node
- https://snyk.io/blog/choosing-the-best-node-js-docker-image/
- https://docs.docker.com/build/checks/

### GitHub

- https://github.com/features/actions

## 🔁 Changelog

[CHANGELOG](CHANGELOG.md)

## ⚖️ License

MIT [License](LICENSE). Copyright janik6n.