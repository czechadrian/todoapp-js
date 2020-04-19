import { ActionType, createAction, createReducer } from "typesafe-actions";
import produce from "immer";
import {addTypedTaskAsyncAction, changeTaskNameAction} from "app/reducers/add";
import { searchTaskAction } from "app/reducers/search";

export interface TLanguage {
  language: string;
}

export const initialState: TLanguage = {
  language: "pl",
};

export const changeLanguageAction = createAction(
  "privileges/CHANGE_LANGUAGE"
)();

export const actions = {
  changeLanguageAction,
  changeTaskNameAction,
  searchTaskAction,
  addTypedTaskAsyncAction,
};
export const language = createReducer<
  TLanguage,
  ActionType<typeof changeLanguageAction>
>(initialState).handleAction(
  changeLanguageAction,
  (state: { language: string }) =>
    produce(state, (draftState) => {
      const language = state.language;
      language === "en"
        ? (draftState.language = "pl")
        : (draftState.language = "en");
    })
);
