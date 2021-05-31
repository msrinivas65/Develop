import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from '../add-post/add-post.component';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { PostListComponent } from '../post-list/post-list.component';

const routes: Routes = [
  {path: '', component: PostListComponent, 
   children: [
     {path: "post/add", component: AddPostComponent},
     {path: "edit/:id", component: PostEditComponent}
    ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { }
