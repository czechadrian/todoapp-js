import * as React from "react";
import { Provider, useDispatch } from "react-redux";
import { Store } from "redux";
import { TRootState } from "app/reducers";
import { HeaderApp } from "app/screens";
import { AppIntlContextProvider } from "app/intl/app-intl-context-provider";
import { Content } from "app/screens/content";
import { fetchToDoItems } from "app/screens/content-actions";

export interface TTodo {
  store: Store<TRootState>;
}

export const Todo: React.FunctionComponent<TTodo> = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <AppIntlContextProvider>
        <HeaderApp />
        <Content />
      </AppIntlContextProvider>
    </Provider>
  );
};
