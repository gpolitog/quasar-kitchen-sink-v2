# Quasar Kitchen Sink v2 App

A [Quasar](http://quasar-framework.org/) Kitchen Sink app for Vue2. 

Initialized using [Quasar CLI](https://github.com/rstoenescu/quasar-cli) with the `v2` [template](https://github.com/rstoenescu/quasar-templates/tree/v2).

Demonstrates most of the [Quasar components](http://quasar-framework.org/components/) available with code that you can reuse for your project.

## Community

Participate in the [Quasar lobby](https://gitter.im/quasarframework/Lobby) to ask questions etc.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
quasar dev

# build for production with minification
quasar build

# run unit tests
quasar test --unit

# run e2e tests
quasar test --e2e

# run all tests
quasar test
```

## Electron

Run: `cd electron && npm start`

Configured to use hot reload. Whenever the app is recompiled into `/dist` it will hot load the app!

## Development

Run `npm run dev`

Open `localhost:8080` in Chrome

Start developing and notice the hot loading of your changes at work!

Open *Chrome dev tools* and check the browser *console* for errors to help you better debug ;)

## Adding components

To render the index (list) of components we use a [v-for loop](http://vuejs.org/guide/#Conditionals-and-Loops) 
over a number of data `items`. 

In `components/index.vue` add links in `data/items` Array:

```js
export default {
  data: () => {
    return {
      items: [
        { link: 'breadcrumb', label: 'Breadcrumb' },
        // insert more here ...
      ]
    }
  }
}
```

The `index` component is set up to render a list of links to display each component: 

```html
<div class="list">
  <div class="item" v-for="item in items">
    <div class="item-content">
      <router-link :to="{ name: item.link }">{{ item.label }}</router-link>
    </div>
  </div>
</div>    
```

It should in effect be resolved to the same as:

`<router-link :to="{ name: 'breadcrumb' }">Breadcrumb</router-link>`

See [Simple router example app](https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js)

## Code examples

We will be trying to display code examples using either: 
- [higlightjs](https://highlightjs.org/usage/) see [isagalaev](https://github.com/isagalaev/highlight.js)

Is there a ready to use Vue2 compatible *code syntax highlighter*? If not we should make one!

We will use a [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 
to highlight code when component is mounted.

```js
const worker = new Worker('workers/syntax-highlighter.js');

mount: () => {
  var code = document.querySelector('pre code');

  worker.onmessage = function(event) { 
    code.innerHTML = event.data; 
  }
  worker.postMessage(code.textContent);
})
```

In `workers/syntax-highlighter.js`

```js
onmessage = function(event) {
  importScripts('<path>/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
```