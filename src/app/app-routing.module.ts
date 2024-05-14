import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "usuarios", component: UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
