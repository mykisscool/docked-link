# Docked Link jQuery Plugin
This jQuery plugin adds a fixed link below the fold anchored to either the center-left or center-right of your browser window. Simply specify the element/link, how far below the fold you'd like your link to appear (where the tripwire is), and which side of the browser window you'd like your link docked on.

[DEMO](https://mykisscool.github.io/docked-link/)

### Basic requirements

- You'll need a doctype declaration or `$(window).height()` will not provide an accurate calculation.
- The object calling the `dockedLink()` method *should* be a block-level element.
- jQuery.

### Example one

```javascript
// Default dock is on the right and the default starting point is 1,000 pixels from the top
$('#myLink').dockedLink();
```

### Example two

```javascript
$('#myLink').dockedLink({
  pixelsFromTop: 1500, // Longer pages
  position: 'left'
}).attr('href', 'https://www.github.com'); // Some chaining
```
