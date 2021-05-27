import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CounterHeaderComponent } from './counter-header/counter-header.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'counterHeader', component: CounterHeaderComponent},
  {path: 'postList', component: PostListComponent, 
   children: [{path: "post/add", component: AddPostComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
