import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'resume', loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule) },
  { path: '', pathMatch: 'full', redirectTo: '/resume' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
