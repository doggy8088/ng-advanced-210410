import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorsComponent } from './utilities/colors/colors.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'utilities',
    children: [
      { path: 'color', component: ColorsComponent, data: { seoTitle: 'N/A' } },
      { path: 'color/:type', component: ColorsComponent,
        data: {
          seo: {title:'Color', desc: ''}
        }
      },
    ]
  },
  { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'corrected',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
