import { createAction, props } from "@ngrx/store";
import { post } from "../modals/post.interface";

export const ADD_POST_ACTION = '[posts page] add post';

export const addPost = createAction(ADD_POST_ACTION, props<{posts: post}>());