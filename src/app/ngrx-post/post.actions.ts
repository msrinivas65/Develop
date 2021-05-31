import { createAction, props } from "@ngrx/store";
import { post } from "../modals/post.interface";

export const ADD_POST_ACTION = '[posts page] add post';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const DELETE_POST_ACTION = '[posts page] Delete post';

export const addPost = createAction(ADD_POST_ACTION, props<{posts: post}>());

export const updatePost = createAction(UPDATE_POST_ACTION, props<{posts: post}>());

export const DeletePost = createAction(DELETE_POST_ACTION, props<{id: number}>());