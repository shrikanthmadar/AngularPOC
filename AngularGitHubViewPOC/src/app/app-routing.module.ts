import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { RepositoryComponent } from './pages/repository/repository.component';

const routes: Routes = [
  {
    path:'',
    component:RepositoriesComponent
  },{
    path:'repositories',
    component:RepositoriesComponent
  },{
    path:'repository/:owner/:name',
    component:RepositoryComponent
  },{
    path:'**',
    component:RepositoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
