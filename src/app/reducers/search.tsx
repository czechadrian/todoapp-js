import React from "react";
import { createAction, createReducer } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";
import produce from "immer";

export interface TSearch {
  name: any;
}
export const initialState: TSearch = {
  name: "",
};
export const searchTaskAction = createAction("search/TYPE_TASK")<TSearch>();
type TSearchTaskAction = ActionType<typeof searchTaskAction>;

export const search = createReducer<TSearch, TSearchTaskAction>(
  initialState
).handleAction(searchTaskAction, (state, action) =>
  produce(state, (draftState) => {
    draftState.name = action.payload.name;
  })
);
