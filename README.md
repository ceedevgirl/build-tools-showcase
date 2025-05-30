# Build Tool Showcase

A modern front-end web application that showcases popular development tools using **TypeScript**, **Webpack**, **Sass**, and key developer experience tools like ESLint, Prettier, and Husky.

---

## Features

- TypeScript for type-safe development
- Webpack bundler with separate dev/prod configurations
- SCSS styling with variables, mixins, and partials
- Theme switcher (light/dark)
- Tools loaded dynamically from `tools.json`
- ESLint + Prettier for code quality and formatting
- Husky pre-commit hook for automated checks
- Unit testing with Jest and good code coverage

---

## Project Structure

src/
├── index.html # App entry HTML
├── index.ts # App entry script
├── style.scss # Main SCSS file
├── data/
│ └── tools.json # Tool data (loaded in app)
├── model/
│ └── types.ts # TypeScript types
├── partials/
│ ├── \_mixins.scss # SCSS mixins
│ └── \_variables.scss# SCSS variables
├── tests/
│ └── index.test.ts # Jest unit tests
└── utils/
└── toolUtils.ts # Utility functions

---

## Build Setup

### Install Dependencies

```bash
npm install

### Run Dev Server
npm run dev


### Production Build
npm run build


### Code Quality
##  Lint Code
npm run lint

### Format Code
npm run format


### Lint & Format Check
npm run check

### Testing
## Run All Tests
npm run test


### Jest Setup
Configured via jest.config.js

Setup file: jest.setup.ts

### Git Hooks
## Pre-commit Hook (via Husky)
# Runs linting and formatting automatically before every commit

npm run precommit

### Build Tooling
Tool	            Role
TypeScript	        Type-safe development
Webpack	            Bundling
Sass (SCSS)	        CSS preprocessing
ESLint	            Static analysis / linting
Prettier	        Code formatting
Husky	            Git hooks
Babel	            JS compatibility
Jest	            Unit testing



```
