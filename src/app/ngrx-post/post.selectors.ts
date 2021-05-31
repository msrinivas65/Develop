import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../store/app.state";

const getAppStateList = createFeatureSelector<AppState>('posts');

export const getAppStateListData = createSelector(getAppStateList, (state) => {
    return state.posts
})


export const getPostById = createSelector(getAppStateList, (states,props) => {
    return  states.posts.find(x => x.id === +props.postId);
})
 