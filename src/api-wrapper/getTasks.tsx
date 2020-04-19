import { apiGet, createUrl } from "api-wrapper/apiCall";
import { TFetchTasksResponse } from "app/screens/content-actions";

export const getTasks = async () => {
  const url = createUrl(`/todoapp/tasks`);
  return await apiGet<TFetchTasksResponse>(url);
};
