# Oar Skylight

Oar Skylight is a Single Page Application based on [OAR API](oar.imag.fr/docs/latest/user/api.html).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### How to start
**Note** that this seed project requires  **node >=v6.9.0 and npm >=3**.

In order to start the project use:
```bash
$ git clone https://github.com/oar-team/oar-skylight.git
$ cd oar-skylight
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

[Check angular CLI documentation](https://github.com/angular/angular-cli/wiki/build) for tooling informations

### Build


#### Production build

1) Make sure everything is set up properly.
- You have **node >=v6.9.0 and npm >=3**
- Checkout on banche you want to build
- Do a `npm update` to make sure libraries are up to date (or `npm install`)

2) Go to `/src/environments/environment.prod.ts` and make sure constants are well configured.

3) Run build process with :  `npm run build`.

    Generated files can be found in `/dist/`

4) Copy `/dist/` sources to your www directory. (keep the `.htaccess` rules)

##### Problem solving

- `ENOENT: no such file or directory` you are not on the good directory. 

- Cannot build ? [Check angular CLI documentation](https://github.com/angular/angular-cli/wiki/build)

### Documentation 

To run the Documentation :

`npm install -g @compodoc/compodoc`

Generate the documentation with `npm run compodoc`. Now go to : http://localhost:8080/

### Code

This app use [Prettier](https://github.com/prettier/prettier) formatting. Please lint your code before commit.