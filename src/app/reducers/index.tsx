import { combineReducers } from "redux";
import { language } from "app/reducers/language";
import { add } from "app/reducers/add";
import { search } from "app/reducers/search";
import { TFetchTasksResponse } from "app/screens/content-actions";
import { todo } from "app/reducers/todo";

export interface TRootState {
  language: { language: string };
  search: { name: string };
  add: { name: string };
  todo: TFetchTasksResponse;
}
export const TRootStateInitial: TRootState = {
  language: { language: "" },
  search: { name: "" },
  add: { name: "" },
  todo: { tasks: [] },
};

const rootReducer = combineReducers<TRootState>({
  language,
  search,
  add,
  todo,
});

export default rootReducer;
