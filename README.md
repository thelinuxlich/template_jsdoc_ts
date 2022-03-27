This repository showcases how you can have typechecking in JS files using Typescript and also generates documentation, inline testing, coverage and pre-commit hooks typechecking, linting and running the test suite + [conventional-commit](https://conventionalcommits.org/) messages

Steps:

- npm install
- npm run docs
- npm run test
- npm run coverage
- npm run lint
- npm run format

You can also optionally build the project with `npm run build` if you are developing a frontend or just want to remove the `import.meta.vitest` code. You might want to customize `vitest.config.js` to your project then.
