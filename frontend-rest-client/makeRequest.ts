/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

/**
 *This function handles all api calls.
 *@function makeRequest
 *@param {AxiosRequestConfig} object - API request configuration
 *@returns {AxiosPromise} - axios promise
 */
export const makeRequest = ({
  url = '/',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
}: AxiosRequestConfig): AxiosPromise<any> => {
  return axios({ url, method, params, data, headers });
};
