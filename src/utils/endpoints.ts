import { USER_POLLS_PER_PAGE } from "./constants";

const API_URL = "http://localhost:5000";

export const REGISTER_ENDPOINT = API_URL + "/users";
export const LOGIN_ENDPOINT = API_URL + "/users/login";
export const CREATE_POLL_ENDPOINT = API_URL + "/polls";
export const GET_USER_ADMIN = API_URL + "/admin/users";
export const GET_PROFESIONALES_ADMIN = API_URL + "/admin/profesionales";
export const GET_ALL_ROL_USERS = API_URL + "/admin/all_rol_users";
export const GET_USUARIOS_ASIGNADOS_PROFESIONAL = (idProfesional: number) => `${API_URL}/admin/professionals/${idProfesional}/assigned-users`;
export const GET_POLL_WITH_QUESTIONS_ENDPOINT = (uuid: string) => `${API_URL}/polls/${uuid}/questions`;
export const CREATE_POLL_REPLY_ENDPOINT = API_URL + "/polls/reply";
export const GET_USER_POLLS_ENDPOINT = (page: number) => `${API_URL}/polls?page=${page}&limit=${USER_POLLS_PER_PAGE}`;
export const TOGGLE_POLL_OPENED_ENDPOINT = (uuid: string) => `${API_URL}/polls/${uuid}`;
export const DELETE_POLL_ENDPOINT = (uuid: string) => `${API_URL}/polls/${uuid}`;
export const GET_POLL_RESULTS_ENDPOINT = (uuid: string) => `${API_URL}/polls/${uuid}/results`;

