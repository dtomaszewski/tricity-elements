import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { WrapperComponent } from './wrapper/wrapper.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [WrapperComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const tricityWrapper = createCustomElement(WrapperComponent, {injector});
    customElements.define('tricity-wrapper', tricityWrapper);
  }

  ngDoBootstrap() {}
}
