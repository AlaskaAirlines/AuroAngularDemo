import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare global {
  interface Window {
    WebComponents: any;
  }
}

window.WebComponents.waitFor(() => {
  // At this point we are guaranteed that all required polyfills have
  // loaded, and can use web components API's.
  // The standard pattern is to load element definitions that call
  // `customElements.define` here.
  // Note: returning the import's promise causes the custom elements
  // polyfill to wait until all definitions are loaded and then upgrade
  // the document in one batch, for better performance.
  return import('./webcomponents');
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
