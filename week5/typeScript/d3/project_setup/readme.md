### TypeScript Project Setup

Create a project folder, and inside of this folder, you will have 

- dist/
    - index.js(generated from index.ts using tsc)
- src/
    - index.ts
- package.json
- tsconfig.json
- index.html

```bash
tsc --init (to create tsconfig.json)
node init (to create package.json)
```

This will create a `tsconfig.json` file in the root of your project. This file is used to configure the TypeScript compiler. You can read more about it [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

This also will create a `package.json` file in the root of your project.

---

dist: distribution folder for end product
src: source folder for development

--- 
```tsconfig.json
...
"outDir": "./dist", // output directory
...
```
--- 

```bash
tsc -w or tsc --watch for watch mode of typescript compiler
```

will watch for changes in the src folder and compile them to the dist folder

---

Let's install lite-server package and add a script to run it in the package.json file.

```bash
npm install lite-server --save-dev (will install lite-server for project)
```

```package.json
"scripts": {
    ...
    "start": "lite-server | tsc -w" // will run lite-server and tsc in watch mode
    ...
},
```