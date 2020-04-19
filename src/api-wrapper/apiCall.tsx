import axios, { AxiosRequestConfig } from "axios";
import { isEmpty } from "lodash";
import queryString from "query-string";
export const defaultAxiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiGet = async <RES extends any>(
  queryUrl: string,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.get<RES>(queryUrl, {
    ...axiosOptions,
  });
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiPost = async <RES extends any, REQ extends any>(
  queryUrl: string,
  requestBody?: REQ,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.post<RES>(queryUrl, requestBody, {
    ...axiosOptions,
  });
  return data;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiPut = async <RES extends any, REQ extends any>(
  queryUrl: string,
  requestBody?: REQ,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.put<RES>(queryUrl, requestBody, {
    ...axiosOptions,
  });
  return data;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiPatch = async <RES extends any, REQ extends any>(
  queryUrl: string,
  requestBody?: REQ,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.patch<RES>(queryUrl, requestBody, {
    ...axiosOptions,
  });
  return data;
};

export const createUrl = (queryUrl: string, queryParams = {}) => {
  if (isEmpty(queryParams)) {
    return queryUrl;
  }
  return queryUrl + "?" + queryString.stringify(queryParams);
};

const axiosConfigOperation: AxiosRequestConfig = {
  ...defaultAxiosConfig,
  baseURL: "/",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiGetOperation = async <RES extends any>(
  queryUrl: string,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.get<RES>(queryUrl, {
    ...axiosConfigOperation,
    ...axiosOptions,
  });
  return data;
};

const axiosConfigPlanning: AxiosRequestConfig = {
  ...defaultAxiosConfig,
  baseURL: "/",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiGetPlanning = async <RES extends any>(
  queryUrl: string,
  axiosOptions?: AxiosRequestConfig
) => {
  const { data } = await axios.get<RES>(queryUrl, {
    ...axiosConfigPlanning,
    ...axiosOptions,
  });
  return data;
};
