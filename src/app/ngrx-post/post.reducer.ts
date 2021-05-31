import { createReducer, on } from "@ngrx/store"
import { postInterfaceList } from "../modals/post.interface"
import { addPost, DeletePost, updatePost } from "./post.actions"
import { initialPostState } from "./post.state"

const _createPostListData = createReducer<postInterfaceList>(initialPostState, 
    on(addPost, (states, actions) => {
        let post = {...actions.posts}
        post. id = states.posts.length + 1
         return  {
             ...states,
             posts: [...states.posts, post]
         }
    }),
    on(updatePost, (state, action) => {
   let updatePostData = state.posts.map(x => {
       return x.id === action.posts.id ? action.posts:x;
   }) 
   console.log(updatePostData);
        return {
            ...state,
           posts: updatePostData
        }
    }),on(DeletePost, (state, { id }) => {
        console.log(state);  
        console.log(id);   
        let updatePostData = state.posts.filter(x => {
           return x.id !== id
        })
        console.log(updatePostData)
        return {
            ...state,
            posts: updatePostData
        }
    })
)

export  function  createPostReducer(states, actions)  {
    return _createPostListData(states, actions) 
}
