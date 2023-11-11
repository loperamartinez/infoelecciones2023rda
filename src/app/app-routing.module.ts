import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Elecciones2019Component } from './pages/elecciones2019/elecciones2019.component';
import { Router } from '@angular/router';
import { Elecciones2023Component } from './pages/elecciones2023/elecciones2023.component';
import { InfocandidatosComponent } from './pages/infocandidatos/infocandidatos.component';

const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'elecciones2019', component: Elecciones2019Component},
  { path: 'elecciones/:ciudad', component: Elecciones2023Component }, 
  {path: 'infocandidatos/:ciudad/:index', component: InfocandidatosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
