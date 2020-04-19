import { apiPost, createUrl } from "api-wrapper/apiCall";

export const addTask = async (name: any) => {
  const url = createUrl(`/todoapp/tasks`);
  return apiPost(url, {
    name,
  });
};
