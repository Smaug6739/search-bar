# Search bar

This project is a simple search bar with autocomplete feature.  
It can work with an api or other external service to provide dynamicly suggestions.
To change the default values or use an api you can change the code of the "suggestions.js" file (src/js/suggestions.js).

## Usage

You can change the file `suggestions.js` to use an api or other external service.

```js
/* File suggestions.js */
function getSuggestion(str) {
  // Here you can fetch an api with the start of string
  return ["unique", "unique2", "unique3"];
}
```

## License

This project has an MIT license.
