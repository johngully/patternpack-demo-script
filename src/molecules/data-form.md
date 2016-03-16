---
title: Data Form
---
## Data Form
A data form is designed to fit the most common form pattern in the application.
It provides the desired spacing and layout for basic data entry needs.

### Examples
<div class="library__example">
  <form class="data-form">
    <div class="form-item">
      <label for="username">UserName</label>
      <input type="text" name="username" />
    </div>
    <div class="form-item">
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
  <div class="form-item">
    <label for="..."> ... </label>
    <input type="text" name="..." />
  </div>
  <div class="form-item">
    <label for="..."> ... </label>
    <input type="text" name="..." />
  </div>
  <div>
    <button type="button">Secondary Action</button>
    <button type="submit">Primary Action</button>
  </div>
</form>
```
