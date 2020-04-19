import React, { FunctionComponent } from "react";
import { useIntl } from "react-intl";
import { Button, FormControl, Navbar } from "react-bootstrap";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { actions } from "app/reducers/language";
import styled from "styled-components";
import { Dispatch } from "index";
import { TRootState } from "app/reducers";
import { addTypedTaskAsyncAction } from "app/reducers/add";

export const HeaderApp: FunctionComponent = () => {
  const { formatMessage: f } = useIntl();
  const dispatch: any = useDispatch();
  const Header = styled(Navbar)<{}>`
    width: 100%;
    expand: "lg";
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
  const getLanguage: any = useTypedSelector((state) => state.language);
  const getTaskName: any = useTypedSelector((state) => state.add.name);

  return (
    <>
      <Header>
        <FormControl
          type="text"
          placeholder={f({ id: "search-placeholder" })}
          className=" mr-sm-2"
          onChange={(event: any) =>
            dispatch(
              actions.searchTaskAction({ name: event.currentTarget.value })
            )
          }
        />
        <FormControl
          type="text"
          className=" mr-sm-2"
          onChange={(value: any) =>
            dispatch(
              actions.changeTaskNameAction({ name: value.currentTarget.value })
            )
          }
          value={getTaskName}
          autoFocus
        />
        <Button
          type="submit"
          onClick={() => dispatch(actions.addTypedTaskAsyncAction(getTaskName))}
        >
          {f({ id: "submit-task" })}
        </Button>
        <Button
          variant="light"
          onClick={() => dispatch(actions.changeLanguageAction())}
        >
          {getLanguage.language === "pl" ? "en" : "pl"}
        </Button>
      </Header>
    </>
  );
};

export default HeaderApp;
