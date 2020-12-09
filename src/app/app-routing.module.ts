import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ColhomeComponent } from './colhome/colhome.component';
import { DetallecampeonatoComponent } from './detallecampeonato/detallecampeonato.component';
import { ColequiposComponent } from './colequipos/colequipos.component';


export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'colhome',
    component: ColhomeComponent
  },
  {
    path: 'detallecampeonato',
    component: DetallecampeonatoComponent
  },
  {
    path: 'colequipos',
    component: ColequiposComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
