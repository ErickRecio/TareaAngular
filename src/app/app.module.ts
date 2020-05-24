import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetalComponent } from './metal/metal.component';
import { ClasicaComponent } from './clasica/clasica.component';
import { ApocalypseComponent } from './apocalypse/apocalypse.component';
import { HorrorComponent } from './horror/horror.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MetalComponent,
    ClasicaComponent,
    ApocalypseComponent,
    HorrorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
