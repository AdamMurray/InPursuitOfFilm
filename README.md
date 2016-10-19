
# In Pursuit of Film

A progressive web application which allows users to search The Movie DB API,
and view matching films, TV shows, and people.

## Building // Development // Testing

In order to start up the development server and build the project for
development, simply navigate to the root of the project and run:

```
$ npm start
```

To build the project for production, run:

```
$ ./scripts/build_prod.sh
```

This will run the build script and put the relevant files in the project root, so
that they can be hosted using Github Pages.

**Note: the file paths referenced in `index.html` must be pointed to the correct Github pages
URL, therefore the leading / must be removed from them.**

This creates / updates the `build` folder (found in the project's root)
with all the necessary files for deployment.

To run tests:

```
$ npm test
```

