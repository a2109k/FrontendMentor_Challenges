import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogrComponent } from './blogr/blogr.component';

const routes: Routes = [
  {path: "", component: BlogrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
