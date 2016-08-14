## NodeConf Budapest 2017 Website

> Simple static website built using Jade, Stylus, Browserify + Babelify

#### Build

All files build to the `www` directory, along with assets and other static files - Build files are ignored, so no need to worry about this in the workflow.

Commands for the build are written inline in `package.json` - So it's using no fancy built tool and is a very bare-bone, simple and quick implementation.

To build the website just run:

```
npm run build
```

#### Run

You need to be running a simple static http-server pointing at the `www` folder to view the website correctly locally - To do this, just run:

```
npm start
```

Default port is `3000`, but the `start` script will accept a `PORT` environment variable.

#### Develop

You can run static-server, watching of changes and livereloading of the codebase with a single command:

```
npm run dev
```
