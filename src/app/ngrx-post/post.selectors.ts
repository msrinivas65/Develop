import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../store/app.state";

const getAppStateList = createFeatureSelector<AppState>('posts');

export const getAppStateListData = createSelector(getAppStateList, (state) => {
    return state.posts
})