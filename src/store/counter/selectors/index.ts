import { createSelector } from "reselect";
import { RootState } from "../../applicationState";

export const getCounterState = (state: RootState) => state.counter;

export const getCount = createSelector(
  getCounterState,
  (counter) => counter.count
)