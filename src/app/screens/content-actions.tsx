import { getTasks } from "api-wrapper/getTasks";
import { ActionType, createAction } from "typesafe-actions";
import { ThunkAction } from "redux-thunk";
import { TRootState } from "app/reducers";

export type TFetchTasksResponse = {
  tasks: Array<{
    type: "string";
    name: "string";
  }>;
};
export const getTasksInitAction = createAction("todo-items/FETCH_INIT")();
export type TGetTasksInitAction = ActionType<typeof getTasksInitAction>;

export const getTasksSuccessAction = createAction("todo-items/FETCH_SUCCESS")<
  TFetchTasksResponse
>();
export type TGetTasksSuccessAction = ActionType<typeof getTasksSuccessAction>;

export const getTasksFailureAction = createAction("todo-items/FETCH_FAILURE")();
export type TGetTasksFailureAction = ActionType<typeof getTasksFailureAction>;

export type TFetchAsyncAction = () => ThunkAction<
  void,
  TRootState,
  null,
  TGetTasksSuccessAction | TGetTasksFailureAction | TGetTasksInitAction
>;
export const fetchToDoItems: TFetchAsyncAction = () => async (dispatch) => {
  dispatch(getTasksInitAction());
  return getTasks()
    .then((payload: TFetchTasksResponse) => {
      return dispatch(
        getTasksSuccessAction({
          tasks: payload.tasks,
        })
      );
    })
    .catch(() => {
      return dispatch(getTasksFailureAction());
    });
};
