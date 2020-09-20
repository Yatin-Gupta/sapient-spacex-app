import axios from "axios";
import { SPACEX_API_BASE_URL, GET_LAUNCHES_API_ENDPOINT, LAUNCH_FILTERS_STORAGE_NAME } from "./config";

/**
 * Get filters from local storage(if set) and accordingly fetch launch programs
 * Runs when component first time mounts
 */
async function getLaunchesWhenPageLoads() {
  let launchParams = { limit: 100 };
  const storedFilter = localStorage.getItem(LAUNCH_FILTERS_STORAGE_NAME);
  if (storedFilter) {
    launchParams = { ...launchParams, ...JSON.parse(storedFilter) };
  }
  let requestUrl = "";
  for (const param in launchParams) {
    requestUrl = `${requestUrl}${param}=${launchParams[param]}&`;
  }
  requestUrl = `${SPACEX_API_BASE_URL}${GET_LAUNCHES_API_ENDPOINT}?${requestUrl.substring(0, requestUrl.length - 1)}`;
  let response = { data: null };
  try {
    response = await axios.get(requestUrl);
    return response;
  } catch (e) {
    return response;
  }
}

/**
 * Fetch and return the launch programs based on filter status provided
 * @param {number|undefined} launch_year Launch Year
 * @param {string|undefined} launch_success Launch Success(can be 'true' or 'false')
 * @param {string|undefined} land_success Land Success(can be 'true' or 'false')
 * @param {number} limit Default value is 100. Number of programs to fetch at once
 */
async function getLaunches(launch_year, launch_success, land_success, limit = 100) {
  let requestUrl = "";
  const filter = { limit, launch_year, launch_success: launch_success === undefined ? undefined : launch_success.toLowerCase(), land_success: land_success === undefined ? undefined : land_success.toLowerCase() };
  localStorage.setItem(LAUNCH_FILTERS_STORAGE_NAME, JSON.stringify(filter));
  requestUrl = launch_success === undefined ? requestUrl : `${requestUrl}&launch_success=${launch_success.toLowerCase()}`;
  requestUrl = land_success === undefined ? requestUrl : `${requestUrl}&land_success=${land_success.toLowerCase()}`;
  requestUrl = launch_year === undefined ? requestUrl : `${requestUrl}&launch_year=${launch_year}`;
  requestUrl = `${SPACEX_API_BASE_URL}${GET_LAUNCHES_API_ENDPOINT}?limit=${limit}${requestUrl}`;
  let response = { data: null };
  try {
    response = await axios.get(requestUrl);
    return response;
  } catch (e) {
    return response;
  }
}

export default {
  getLaunchesWhenPageLoads,
  getLaunches,
};
