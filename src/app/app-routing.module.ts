import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Se agrega Modulo
import { InicioComponent } from "./inicio/inicio.component";
import { MetalComponent } from './metal/metal.component';
import { ClasicaComponent } from './clasica/clasica.component';
import { ApocalypseComponent } from "./apocalypse/apocalypse.component";
import { HorrorComponent } from "./horror/horror.component";

// Por útlimo, modificar el arreglo de las rutas ...
const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'metal', component: MetalComponent},
  { path: 'clasica', component: ClasicaComponent},
  { path: 'apocalypse', component: ApocalypseComponent},
  { path: 'horror', component: HorrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
