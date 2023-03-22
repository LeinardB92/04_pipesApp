import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Módulo personalizado.
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app.
import localeEsMx from "@angular/common/locales/es-MX";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEsMx);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-Mx'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
