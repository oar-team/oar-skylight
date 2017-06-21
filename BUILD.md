# Oar Skylight build

## Production build

1) Make sure everything is set up properly.
- Checkout on banche you want to build
- Do a `npm update` to make sure libraries are up to date (or `npm install`)

2) Go to `/src/environments/environment.prod.ts` and make sure constants are well configured.

3) Run build process with :  `npm run build`.

    Generated files can be found in `/dist/`

4) Copy `/dist/` sources to your www directory. (keep the `.htaccess` rules)

## Problem solving

- `ENOENT: no such file or directory` you are not on the good directory. 

- Cannot build ? [Check angular CLI documentation](https://github.com/angular/angular-cli/wiki/build)