import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from '../ngrx-post/post.actions';
import { AppState } from '../store/app.state';
import { post } from "../modals/post.interface";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  
  constructor(public fb: FormBuilder, public store: Store<AppState>) { }
  postForm: FormGroup
  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  addPost() {
    const posts : post = {
      title: this.postForm.get('title').value,
      description: this.postForm.get('description').value
    }
    this.store.dispatch(addPost({ posts }))
    this.postForm.reset();
  }

}
