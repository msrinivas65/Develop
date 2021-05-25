import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterInterface } from "./counter.states";


const getCounterData = createFeatureSelector<counterInterface>('counter');

export const getCounter = createSelector(getCounterData, (state) => {
    return state.counter
});

export const getCounterValue = createSelector(getCounterData, (state) => {
    return state.myNameIs
})