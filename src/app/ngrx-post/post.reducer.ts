import { createReducer, on } from "@ngrx/store"
import { postInterfaceList } from "../modals/post.interface"
import { addPost } from "./post.actions"
import { initialPostState } from "./post.state"

const _createPostListData = createReducer<postInterfaceList>(initialPostState, 
    on(addPost, (states, actions) => {
        let post = {...actions.posts}
        post. id = states.posts.length + 1
         return  {
             ...states,
             posts: [...states.posts, post]
         }
    })
)

export  function  createPostReducer(states, actions)  {
    return _createPostListData(states, actions) 
}