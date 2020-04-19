import React, { Dispatch } from "react";
import { createAction, createReducer } from "typesafe-actions";
import { ActionType } from "typesafe-actions/dist/type-helpers";
import produce from "immer";
import { TRootState } from "app/reducers/index";
import { ThunkAction } from "redux-thunk";
import {
  fetchToDoItems,
  TGetTasksFailureAction,
  TGetTasksSuccessAction,
} from "app/screens/content-actions";
import { addTask } from "api-wrapper/addTask";

export interface TAdd {
  name: string;
}

export const initialState: TAdd = {
  name: "",
};
export const changeTaskNameAction = createAction("add/TYPE_TASK")<TAdd>();

export const addTaskInitAction = createAction("add/ADD_TYPED_TASK_INIT")();
export const addTaskSuccessAction = createAction("add/ADD_TYPED_TASK_SUCCESS")<
  TAdd
>();
export const addTaskFailureAction = createAction("add/ADD_TYPED_TASK_SUCCESS")<
  TAdd
>();

export type TChangeTaskNameAction = ActionType<typeof changeTaskNameAction>;
export type TAddTypedTaskInitAction = ActionType<typeof addTaskInitAction>;
export type TAddTypedTaskSuccessAction = ActionType<
  typeof addTaskSuccessAction
>;
export type TAddTypedTaskFailureAction = ActionType<
  typeof addTaskFailureAction
>;

export type TAddTypedTaskAsyncAction = (
  name: string
) => ThunkAction<
  void,
  TRootState,
  null,
  | TAddTypedTaskInitAction
  | TAddTypedTaskSuccessAction
  | TAddTypedTaskFailureAction
  | TGetTasksSuccessAction
  | TGetTasksFailureAction
>;
export const addTypedTaskAsyncAction: TAddTypedTaskAsyncAction = (
  name: string
) => (dispatch: Dispatch<any>, getState: () => TRootState) => {
  dispatch(addTaskInitAction());
  addTask(name)
    .then((payload) => {
      if (typeof payload === "undefined") {
        throw new Error(payload);
      }
      dispatch(addTaskSuccessAction({ name: name }));
    })
    .then(() => {
      fetchToDoItems()(dispatch, getState, null);
    })
    .catch(() =>
      dispatch(
        addTaskFailureAction({
          name: name,
        })
      )
    );
};
export const add = createReducer<TAdd, TChangeTaskNameAction>(
  initialState
).handleAction(changeTaskNameAction, (state, action) =>
  produce(state, (draftState) => {
    draftState.name = action.payload.name;
  })
);
