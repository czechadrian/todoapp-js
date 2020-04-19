import { ActionType, createReducer } from "typesafe-actions";
import * as fetchToDoItems from "app/screens/content-actions";
import {
  getTasksSuccessAction,
  TFetchTasksResponse,
} from "app/screens/content-actions";
import produce from "immer";

export const initialState: TFetchTasksResponse = {
  tasks: [],
};

export type TypeFetchToDoActions = ActionType<typeof fetchToDoItems>;
export const todo = createReducer<TFetchTasksResponse, TypeFetchToDoActions>(
  initialState
).handleAction(getTasksSuccessAction, (state, action) =>
  produce(state, (draftState) => {
    draftState.tasks = action.payload.tasks;
  })
);
