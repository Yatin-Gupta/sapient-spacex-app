/**
 * Application Internal Configuration file. For public configurations check public directory
 */
// API Base URL
export const SPACEX_API_BASE_URL = "https://api.spaceXdata.com";
export const GET_LAUNCHES_API_ENDPOINT = "/v3/launches";

export const LAUNCH_YEAR = {
  min: 2006,
  max: 2020,
};

// Key name against which filters status is saved in local storage
export const LAUNCH_FILTERS_STORAGE_NAME = "get_launches_filters";
