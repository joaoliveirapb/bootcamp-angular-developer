import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    PortifolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
