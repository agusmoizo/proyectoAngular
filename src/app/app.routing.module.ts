import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/mi-componente', pathMatch: 'full' },
  { path: 'mi-componente', component: MiComponenteComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
