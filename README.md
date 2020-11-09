## Build

- run `yarn install` then `yarn rollup -c rollup.config.js

## Usage
- `node test.js` to run in a node.js environment using jsdom (uses dist/vue-edge.js)
- python -m http.sever and visit localhost:8000/test.html to test in a browser (using global vuejs build and dist/vue-edge.brower.js)

## Testing
- unit tests: run `yarn jest src/components/Button/Button.spec.js`
