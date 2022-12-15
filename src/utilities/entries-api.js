import sendRequest from "./send-request";
const BASE_URL = "/api/entries";

export async function create(entryData) {
  return sendRequest(`${BASE_URL}`, 'POST', entryData);
}

