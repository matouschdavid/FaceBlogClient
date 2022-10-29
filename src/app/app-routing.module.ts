import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';

const routes: Routes = [{
  path: 'blogs', component: ViewBlogsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
