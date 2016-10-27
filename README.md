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
- Run `npm run dev`
- Open `localhost:8080` in Chrome
- Start developing and notice hot loading of your changes at work!
- Open *Chrome dev tools* and check the _console_ tab for errors, to help you better debug ;)

## Theming

When building your App or starting the dev server you can only use one theme at a time. 
You can however start two dev servers on different ports, each server with a theme. 
This will allow you to see the App with both themes simultaneously.

```
$ quasar dev mat
$ PORT=3000 quasar dev ios
```

## Adding components
To render the index (list) of components we use a [v-for loop](http://vuejs.org/guide/#Conditionals-and-Loops) 
over a number of data `items`. 

In `components/index.vue` add links in `data/items` Array:

Note [data must be a function](http://vuejs.org/guide/components.html#data-Must-Be-a-Function)

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

It will be resolved to the same as:

`<router-link :to="{ name: 'breadcrumb' }">Breadcrumb</router-link>`

See [Simple router example app](https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js)

You also need to add a route for each component in `router.js`

```js
const router = new VueRouter({
  routes: [
    { path: '/', component: load('index'), name: 'index' }, // Default
    { path: '*', component: load('error404') }, // Not found

    // ...

    { path: '/list', component: load('css', 'list'), name: 'list' },
    { path: '/timeline', component: load('css', 'timeline/timeline-list'), name: 'timeline' }
  ]
})    
```

## Form input bindings

See the Vue 2 [Forms guide](https://vuejs.org/guide/forms.html)

## Routes

Use [Nested routes](https://router.vuejs.org/en/essentials/nested-routes.html)

```js
const router = new VueRouter({
  routes: [
    {
      path: '/css', component: CssIndex,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: BreadCrumb },

        // ...other sub routes
      ]
    }
  ]
})
``` 

We could instead load each route object with children from the component section folder:

```js
import css from './components/css/routes'
import form from './components/css/routes'

const router = new VueRouter({
  routes: root.concat(css, form)
})
```

Which when moved into `router/index.js` becomes super elegant!

```js
// router/routes.js
import root from './root'
import css from '../components/css/routes'
import form from '../components/css/routes'

export default root.concat(css, form)
```

Add the routes array imported!

```js
// router/index.js
import routes from './routes'

const router = new VueRouter({
  routes
})
```

Sweet awesomeness!!!

## Static Assets
There are two folders for assets:
- `src/assets/` 
- `src/statics/`

Read the guide [Handling Static Assets](http://quasar-framework.org/guide/app-handling-static-assets.html) to understand how Quasar handles static assets!

### Load components from folder
Ideally we would like to load all components available from a folder (TODO)
See [webpack require.context](https://webpack.github.io/docs/context.html)

## Display Code examples
[highlightjs](http://highlightjs.readthedocs.io/en/latest/) is used to highlight code examples.
Version 9.7 has been installed via [npm](https://www.npmjs.com/package/highlight.js)  

```js
import hljs from 'highlight.js'
```

The `code-display` can be used to display highlighted code examples. The component takes these props:
- `title` - title of component
- `code` code to highlight 
- `language` - language of code to highlight (optional: uses auto-detect per default!) 

```html
<code-display title="VM" language="javascript" :code="vm"></code-display>
```

You can also use the [code-block slot](https://vuejs.org/guide/components.html#Content-Distribution-with-Slots) for simple cases: 

```html
<code-display title="VM" language="javascript" :code="vm">
  <span slot="code-block">var a = 2;</span>
</code-display>
```

### Styling the highlight
Webpack is used to load stylesheeets such as the highlight theme from `main.js`.

```js
const highlightTheme = 'gruvbox-dark'
require('highlight.js/styles/' + highlightTheme + '.css')
```

To change the highlight theme, see the themes available at `node_modules/highlight.js/styles` 

### Loading the code 
We use the `raw-text` webpack loader with `!raw` prefix to load the text file into the code at compile time :)
Configured in `build/webpack.base.conf.js` 

```js
export default {
  data: () => {
    return {
      code: {
        vm: require('raw!../examples/breadcrumb/vm.js.txt'),
        view: require('raw!../examples/breadcrumb/view.html.txt')
      }
    }
  }
}
```

For multiple code displays:

```html
<code-display title="VM" :code="vm"> 
</code-display>
<code-display title="View" :code="view"> 
</code-display>
```

Highlighted code:

```html
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'hello world'</span>)
```

### Using WebWorkers
We could also use a [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 
to highlight code when component is mounted.

```js
const worker = new Worker('workers/syntax-highlighter.js');

mount: () => {
  var code = document.querySelector('pre code');

  worker.onmessage = function (event) {
    log('received data', event.data)
    code.innerHTML = event.data
  }
  worker.postMessage(code.textContent)
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

### Global Component registration
Global registration of `code-display` component is done in `main.js`

```js
import CodeDisplay from './components/global/code-display'

// Ideally iterate through global components!
// Vue.component('code-display', components.global.CodeDisplay)
Vue.component('code-display', CodeDisplay)
```

Usage:

```html
</template>
    ...
    <code-display title="List example" :code="code" language="html"></code-display
  </div>
</template>  
<script>
export default {
  data: () => {
    return {
      code: require('../examples/list/basic.html')
    }
  }
}
</script>
```
