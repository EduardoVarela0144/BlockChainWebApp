import axios from "axios";
import { API_URL, API_ELASTIC_URL } from "@config";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Origin": "*",
};

export const headersElastic = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Origin": "*",
};

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers,
});

export const axiosElasticInstance = axios.create({
  baseURL: API_ELASTIC_URL,
  headersElastic,
});

export default axiosInstance;
