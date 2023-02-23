### TypeScript setup

```bash
tsc --init
```

This will create a `tsconfig.json` file in the root of your project. This file is used to configure the TypeScript compiler. You can read more about it [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

---

dist: distribution folder for end product
src: source folder for development

--- 

"outDir": "./dist",                       Redirect output structure to the directory.

--- 

```bash
tsc -w or tsc --watch
```

will watch for changes in the src folder and compile them to the dist folder

---

```bash
npm install lite-server --save-dev
```

```package.json
"start": "lite-server | tsc -w"
```