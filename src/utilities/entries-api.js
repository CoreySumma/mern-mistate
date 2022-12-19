import sendRequest from "./send-request";
const BASE_URL = "/api/entries";

export async function index() {
  return sendRequest(BASE_URL)
}

export async function deleteEntry(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE")
}

export async function create(entryData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', entryData);
}

export async function updateEntry(entryFormData, id) {
  return sendRequest(`${BASE_URL}/${id}/update`, "PUT", entryFormData)
}