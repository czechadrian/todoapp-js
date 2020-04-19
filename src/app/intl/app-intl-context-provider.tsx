import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { IntlProvider } from "react-intl";
import { messages } from "app/intl/messages/messages";
import * as React from "react";
import { FunctionComponent, ReactNode } from "react";
import { TRootState } from "app/reducers";
import {fetchToDoItems} from "app/screens/content-actions";

export interface TAppIntlContextProvider {
  children?: ReactNode;
}

export const AppIntlContextProvider: FunctionComponent<TAppIntlContextProvider> = (
  props
) => {
  const { children } = props;

  const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
  const getLanguage: any = useTypedSelector((state) => state.language);

  const dispatch = useDispatch();
  dispatch(fetchToDoItems());
  return (
    <IntlProvider
      locale={getLanguage}
      key={getLanguage}
      messages={messages[getLanguage.language]}
    >
      {children}
    </IntlProvider>
  );
};

export default AppIntlContextProvider;
