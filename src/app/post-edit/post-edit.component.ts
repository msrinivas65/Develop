import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { post } from '../modals/post.interface';
import { updatePost } from '../ngrx-post/post.actions';
import { getPostById } from '../ngrx-post/post.selectors';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  singlePost: post;
  constructor(public router: ActivatedRoute, public store: Store<AppState>, public fb: FormBuilder) { }

  updatePostForm: FormGroup

  ngOnInit(): void {
    this.router.paramMap.subscribe((res) => {
      if (res) {
        const postId = res.get('id');
        this.store.select(getPostById, { postId }).subscribe((resData) => {
          if (resData) {
            console.log(resData);
            this.singlePost = resData;
              this.getFormBuilderGroup(this.singlePost);
          }
        })
      }
    })
  }
  getFormBuilderGroup(value) {
    console.log(value.title);
    console.log(value.description);
    this.updatePostForm = this.fb.group({
      title: new FormControl(value.title, Validators.required),
      description: new FormControl(value.description, Validators.required)
    })
  }

  updatePost() {
    const posts : post = {
      id: this.singlePost.id,
      title: this.updatePostForm.get('title').value,
      description: this.updatePostForm.get('description').value
    }
    console.log(posts);
    this.store.dispatch(updatePost({ posts }))
    this.updatePostForm.reset();
  }
}
