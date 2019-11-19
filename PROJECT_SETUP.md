# OrionAngularDemo
Below are instructions for adding Orion compatibility to your Angular application. These instructions are intended for projects that were bootstrapped with Angular CLI. They are written from the perspective of a newly generated project, but it should be clear where to add these lines in an existing project. If your project is using a custom Webpack config, see the [Vanilla JS demo app and instructions](https://github.com/AlaskaAirlines/OrionJavascriptDemo).

## Setting up your Angular app to use Orion Web Components
The following steps will let you start using Web Components in your Angular application across all supported browsers.

1. Install the necessary packages by running `npm install --save-dev @alaskaairux/ods-button @alaskaairux/orion-design-tokens focus-visible @webcomponents/webcomponentsjs` in a terminal. `@alaskaairux/ods-button` is the button component itself. `@alaskaairux/orion-design-tokens` and `focus-visible` are required dependencies for tokens and focus styles, respectively. `@webcomponents/webcomponentsjs` contains polyfills for browsers that don't support Web Components.

1. Add an entry to the build assets (`architect.build.options.assets`) in `angular.json` to copy the Web Components polyfills to the `dist/webcomponents` folder.

    ```js
    "assets": [
      "src/favicon.ico",
      "src/assets",
      {
        "glob": "**/*.js",
        "input": "node_modules/@webcomponents/webcomponentsjs",
        "output": "webcomponents/"
      }
    ],
    ```

1. Add a reference to `webcomponents-loader.js` in the head of `src\index.html`. This will detect whether the user's browser supports Web Components and will polyfill any required features. Make sure you include the `defer` attribute -- conflicting polyfills may prevent the app from loading otherwise.

    ```html
    <script src="webcomponents/webcomponents-loader.js" defer></script>
    ```

1. Add a file called `webcomponents.ts` in the `src` directory. You will add any additional Web Component imports here. After you import a component here, you can use it throughout the rest of your application. For now, just import `ods-button`.

    ```js
    import '@alaskaairux/ods-button';
    ```

1. Next, update `main.ts` to import the Orion Components once the polyfills have loaded. This guarantees that Web Components are not defined until the browser polyfills are ready.

    ```js
    // add this line
    window.addEventListener('WebComponentsReady', () => {
        return import('./webcomponents');
    });
    ```

1. In `app.module.ts`, import and apply `CUSTOM_ELEMENTS_SCHEMA` to [allow the use of HTML elements with dash case](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA). 
    ```js
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core'; // update this line

    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // add this line
    })
    export class AppModule { }
    ```
1. Now you can use `ods-button`. Add a click handler in `app.component.ts` and reference the component in `app.component.html`. 

    ```js
    export class AppComponent {

      handleClick() {
        alert("I've been clicked!")
      }
    }
    ```

    ```html
    <ods-button (click)="handleClick()">Hello World</ods-button>
    ```

1. In `styles.css`, import the Orion Design Tokens from the npm package. The design tokens need to be available for the component to render. 
    ```css
    @import '~@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
    ```
  
    This example project uses Sass to integrate with the Orion Web Core Stylesheets. See `styles.scss` in this project for an example. You will need to `npm install @alaskaairux/orion-web-core-style-sheets` for access to the stylesheets.

1. Run the application with `npm start`. The button should render and trigger an alert when clicked.

## Setting up your Angular app to work with IE11
Some additional steps must be taken to get your Angular app working in IE11. 

1. Add `ie 11` to the `browserslist` file. If this is a freshly generated project, you may need to remove the `not IE 9-11` line.

1. Set `target` to `es5` in `tsconfig.json`.

1. Run the following command in a terminal: `npm install --save-dev @angular-builders/custom-webpack @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime @types/node babel-loader`. This install the necessary packages to transpile modern Javascript to something IE11 will understand.

1. Create the file `custom-webpack.config.js` in the root directory. Set its contents to the following. Since `ods-button` and some of its dependencies are shipped as ES6 modules, we need to compile them to ES5 using babel for legacy browser support.

    ```js
    const path = require('path');

    module.exports = (config, options) => {
      config.module.rules.push({
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules/lit-element'),
          path.resolve(__dirname, 'node_modules/lit-html'),
          path.resolve(__dirname, 'node_modules/@alaskaairux')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  "corejs": false,
                  "helpers": false,
                  "regenerator": true,
                  "useESModules": false
                }
              ]
            ]
          }
        }
      });
      return config;
    };
    ```

1. Update `angular.json` to use the custom webpack config. Set `architect.build.builder` to `"@angular-builders/custom-webpack:browser"` and `architect.serve.builder` to `"@angular-builders/custom-webpack:dev-server"`. Add the property `customWebpackConfig` to `architect.build.options` and point it at the custom webpack config we created.

    ```js
    "customWebpackConfig": {
      "path": "custom-webpack.config.js",
      "mergeStrategies": { "externals": "replace" }
    },
    ```

You should now be able to run the app in IE11 without errors. Run `npm start` in the terminal and view the application in IE11.