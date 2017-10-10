import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppPremier } from './app.premier';
import { AppComponent } from './app.component';
import { TestViaCommandeComponent } from './test-via-commande/test-via-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPremier,
    TestViaCommandeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppPremier]
})
export class AppModule { }
