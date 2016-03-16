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
1. Create a gruntfile.js
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
1. ```grunt patternpack:release``` - Inspect and review the dist folder
> It will fail without a git repository.  This is fine for the DEMO.  The main concern is that the dist folder is generated.


# Manually integrate with an application
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


# Add basic styles
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

# Basic Atoms

### Typography pattern
##### typography.md
```
---
title: Typography
---
## Title & Page Header
The title pattern should be used for both page headers and content titles.

### Examples
<div class="library__example">
  <h1>Lorem ipsum dolor sit amet</h1>
</div>

### Code
```html
<h1> ... </h1>
```

## Content
The content pattern should be used to style to textual content of any page and should be default styling for all text.

### Examples
<div class="library__example">
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
  <p>
</div>

### Code
```html
<p> ... <p>
```

```

##### typography.scss
```
body {
  font-family: helvetica arial sans-serif;
  color: $color-text-primary;
}

h1 {
  font-size: 2em;
}
```

### Button pattern
##### button.md
```
---
title: Buttons
---
## Buttons
There are two forms of buttons used in the application.  Primary buttons should
be used for submitting form or other explicit calls to action.  Secondary buttons
should be used for any other action beyond the primary call to action.

### Examples
<div class="library__example">
  <button type="submit">Primary</button>
  <button type="button">Secondary</button>
</div>

### Code
```html
<button type="submit"></button>
<button type="button"></button>
```

```

##### button.scss
```
button[type="submit"] {
  background-color: $color-button-primary;
  color: $color-text-primary
}

button {
  background-color: $color-button-secondary;
  color: $color-text-secondary;
  padding: 8px 16px;
  border: 0px;
  border-radius: 4px;
}
```

### Forms pattern
##### forms.md
```
---
title: Forms
---
## Forms
Text input field for all forms should use this pattern.

### Examples
<div class="library__example">
  <input type="text"></input>
</div>

### Code
```html
<input type="text"></input>
```

```

##### forms.scss
```
input {
  color: $color-text-secondary;
  padding: 5px;
}
```


# Form data entry molecule
##### form-item.md
```
---
title: Form Item
---
## Form Item
A form item is the combination of a form input element and its corresponding
label.  The label and form element should aways be together as illustrated
in this example.

### Examples
<div class="library__example">
  <label for="example-input">Example Label</label>
  <input type="text" name="example-input" />
</div>

### Code
```html
<label for="..."> ... </label>
<input type="..." />
```

```

##### form-item.scss
```
form > div {
  & > label {
    display: block;
    color: $color-text-secondary;
  }
}
```


# Data form organism
##### data-form.md
```
---
title: Data Form
---
## Data Form
A data form is designed to fit the most common form pattern in the application.
It provides the desired spacing and layout for basic data entry needs.

### Examples
<div class="library__example">
  <form class="data-form">
    <div>
      <label for="username">UserName</label>
      <input type="text" name="username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" />
    </div>
    <div>
      <button type="button">Cancel</button>
      <button type="submit">Login</button>
    </div>
  </form>
</div>

### Code
```html
<form class="data-form">
  <div>
    <label for="..."> ... </label>
    <input type="text" name="..." />
  </div>
  <div>
    <label for="..."> ... </label>
    <input type="text" name="..." />
  </div>
  <div>
    <button type="button">Secondary Action</button>
    <button type="submit">Primary Action</button>
  </div>
</form>
```

```

##### data-form.scss
```
.data-form {
  & > div {
    padding: 15px;
  }
}
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
  npm install boostrap-sass --save-dev
  ```
1. Import the correct file into `src/assets/sass/pattern.scss`
  ```
  @import "../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "_globals";
  @import "_patternpack-patterns"; // Built by sass-globbing
  ```
