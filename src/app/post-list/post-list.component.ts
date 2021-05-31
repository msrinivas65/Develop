import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postInterfaceList } from '../modals/post.interface';
import { DeletePost } from '../ngrx-post/post.actions';
import { getAppStateListData } from '../ngrx-post/post.selectors';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList: postInterfaceList;

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getAppStateListData).subscribe((res) => {
      if (res) {
        this.postList = res;
      }
    })
  }

  deletePostData(id) {
    if (confirm('Are you sure you want to Delete?')) {
      this.store.dispatch(DeletePost({ id }))
    }
  }
}
