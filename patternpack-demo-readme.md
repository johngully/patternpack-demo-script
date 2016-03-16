# Project Setup
1. Create a .gitignore
  ```
  # PatternPack Example Library specific
  src/assets/css/patterns.css*
  src/assets/sass/*patternpack-patterns.scss
  src/assets/less/*patternpack-patterns.less

  # Project directories
  node_modules/
  bower_components/
  html/
  ```
1. Create a package.json
  ```
  {
    "name": "patternpack-demo-library",
    "description": "The demo pattern library created from patternpack",
    "version": "1.0.0"
  }
  ```
1. Add patternpack as a dependency
  ```
  npm install patternpack --save-dev
  ```
1. Create a gruntfile.js (you need grunt installed)
1. Configure patternpack
  ```
  module.exports = function (grunt) {
    grunt.initConfig({
      patternpack: {
        run: {},
        build: {},
        release: {}
      }
    });

    grunt.loadNpmTasks('patternpack');

    grunt.registerTask('default', ['patternpack:run']);
  }
  ```
1. ```grunt``` - Inspect and review all the new files that were created


# Create basic styles
1. Create `src/assets/sass/_globals.scss`
1. Add color variables
  ```
  $color-text-primary: #999;
  $color-text-secondary: #333;
  $color-button-primary: #333;
  $color-button-secondary: #999;

  body {
    color: $color-text-primary;
  }
  ```
1. In `src/assets/sass/patterns.scss` import the the `_globals`
  ```
  @import "_globals";
  ```

# Create patterns

### Typography pattern
```
src/atoms/typography.md
src/atoms/typography.scss
```

### Button pattern
```
src/atoms/buttons.md
src/atoms/buttons.scss
```

# Manually integrate with an application
1. Create a release of the pattern library (inspect the /dist folder, and version changes)
```
grunt patternpack:release
```
1. Create basic application with `index.html`
  ```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Example Application</title>
    </head>
    <body>
      <h1>Login</h1>
      <form>
        <div>
          <label for="username">UserName</label>
          <input type="text" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" />
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Design system by <a href="http://www.patternpack.org">PatternPack<a>.
      </p>
    </body>
  </html>
  ```
1. Add reference to `patternpack-demo-library`
  ```
  "patternpack-demo-library": "../patternpack-demo-library"
  ```
1. `npm install`
1. Add style reference to `index.html`
  ```
  <link href="node_modules/patternpack-demo-library/dist/pattern-library/assets/css/patterns.css" rel="stylesheet">
  ```

# Create more advanced patterns

### Forms pattern
```
src/atoms/forms.md
src/atoms/forms.scss
```

### Form data entry molecule
```
src/molecules/form-item.md
src/molecules/form-item.scss
```

### Data form organism
```
src/molecules/data-form.md
src/molecules/data-form.scss
```

# Create pattern hierarchy
1. Add new folder `src/organisms`
1. Move the `data-form.md` and `data-form.scss` to the new folder
1. Configure the pattern hierarchy in `gruntfile.js`
  ```
  options: {
    patternStructure: [
      { "name": "Atoms", "path": "atoms" },
      { "name": "Molecules", "path": "molecules" },
      { "name": "Organisms", "path": "organisms" },
      { "name": "Templates", "path": "templates" },
      { "name": "Pages", "path": "pages" }
    ]
  },
  ```

# 3rd Party Integration

## Override css styles
1. Add reference to bootstrap directly in the application `index.html`
  ```
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  ```

## Import in pattern.scss
1. Add npm reference
  ```
  npm install bootstrap-sass --save-dev
  ```
1. Import the correct file into `src/assets/sass/pattern.scss`
  ```
  @import "../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "_globals";
  @import "_patternpack-patterns"; // Built by sass-globbing
  ```

# Create a major release
1. Add the additional tasks to the `gruntfile.js`
  ```
  "release-patch": {},
  "release-minor": {},
  "release-major": {}
  ```
1. Create the release
  ```
  grunt patternpack:release-major
  ```

# Integrate with an application
1. Add the additional tasks to the `gruntfile.js`
```
integrate: {
  options: {
    integrate: "../patternpack-demo-app/node_modules/patternpack-demo-library/dist"
  }
}
```
1. Copy the files using the integrate command
```
grunt patternpack:integrate
```
