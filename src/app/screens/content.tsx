import React, { FunctionComponent } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "app/reducers";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const Content: FunctionComponent = () => {
  const { formatMessage: f } = useIntl();

  const Grid = styled(Container)`
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    margin: 0 100px;
    min-height: 500px;
  `;
  const Label = styled(ListGroupItem)`
    background-color: #007bff;
    justify-content: center;
    display: flex;
  `;
  const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
  const getTasks: any = useTypedSelector((state) => state.todo.tasks);
  return (
    <Grid>
      <Col>
        <ListGroup>
          <Label>Todo tasks</Label>
          {getTasks.map(
            (task: any) =>
              task.type === "todo" && <ListGroupItem>{task.name}</ListGroupItem>
          )}
        </ListGroup>
      </Col>
      <Col>
        <ListGroup>
          <Label>Done tasks</Label>

          {getTasks.map(
            (task: any) =>
              task.type === "done" && <ListGroupItem>{task.name}</ListGroupItem>
          )}
        </ListGroup>
      </Col>
    </Grid>
  );
};
