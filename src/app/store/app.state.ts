import { postInterfaceList } from "../modals/post.interface";
import { counterReducer } from "../ngrx-counter/counter.reducer";
import { counterInterface } from "../ngrx-counter/counter.states";
import { createPostReducer } from "../ngrx-post/post.reducer";

export interface AppState  {
    counter: counterInterface,
     posts: postInterfaceList
}


export const AppReducer  = {
    counter: counterReducer,
    posts: createPostReducer
}
