# html-starter-kit

## Features
- Hot Reloading with Webpack Serve.
- Support for js, scss, css, png, jpg, svg, ttf, eot, svg, otf from the box.
- Usage of ES6+ features with Babel.
- JS linting with ESLint.
- Handling styles with Autoprefixer and PostCSS.
- HTML templates support with HTML Webpack Plugin.

## npm scripts
- _npm start_ - start BrowserSync with Webpack Serve.
- _npm run build_ - clean _dist_ folder and build project in it.
- _npm run analyze_ - the same as _build_ command + open Webpack Bundle Analyzer server.

## Prefered folders structure so far
- _dist/_ - output folder for Webpack in production mode.
- _src/_ - entry point for Webpack (index.js), main .scss file (styles.scss), potscss config. 
  - _/scss/_ - .scss files.
  - _/scripts/_ - .js files.
  - _/public/_ - html-templates and various assets (images, fonts etc). 
  - _/static/_ - various static files to be included in the project. 
  
Inner structure of _src_ subfolders may vary though files are prefered to be grouped by domain.
