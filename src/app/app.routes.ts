import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component'; // Asegúrate de importar el componente

const routes: Routes = [
  { path: '', redirectTo: '/mi-componente', pathMatch: 'full' },
  { path: 'mi-componente', component: MiComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
