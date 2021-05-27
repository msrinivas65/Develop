import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postInterfaceList } from '../modals/post.interface';
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

}
