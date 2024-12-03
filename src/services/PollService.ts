import axios from "axios";
import { CREATE_POLL_ENDPOINT, CREATE_POLL_REPLY_ENDPOINT, DELETE_POLL_ENDPOINT, GET_POLL_RESULTS_ENDPOINT, GET_POLL_WITH_QUESTIONS_ENDPOINT, GET_USER_POLLS_ENDPOINT, TOGGLE_POLL_OPENED_ENDPOINT, GET_USER_ADMIN, GET_PROFESIONALES_ADMIN, GET_ALL_ROL_USERS, GET_USUARIOS_ASIGNADOS_PROFESIONAL } from "../utils/endpoints";
import { PollReply } from "../types";


export const savePoll = (data: any) => {
    return axios.post(CREATE_POLL_ENDPOINT, data);
}

export const getPollWithQuestions = (uuid: string) => {
    return axios.get(GET_POLL_WITH_QUESTIONS_ENDPOINT(uuid));
}

export const createPollReply = (pollReply: PollReply) => {
    return axios.post(CREATE_POLL_REPLY_ENDPOINT, pollReply);
}

export const getUserPolls = (page: number) => {
    return axios.get(GET_USER_POLLS_ENDPOINT(page));
}

export const togglePollOpened = (id: string) => {
    return axios.patch(TOGGLE_POLL_OPENED_ENDPOINT(id));
}

export const deletePoll = (id: string) => {
    return axios.delete(DELETE_POLL_ENDPOINT(id));
}

export const getPollResults = (id: string) => {
    return axios.get(GET_POLL_RESULTS_ENDPOINT(id));
}
export const getUserAdmin = () => {
    return axios.get(GET_USER_ADMIN);
};
export const getProfesionalesAdmin = () => {
    return axios.get(GET_PROFESIONALES_ADMIN);
};
export const getAllRolUsers = () => {
    return axios.get(GET_ALL_ROL_USERS);
};

export const getUsuariosAsignadoProfesional = (id: number) => {
    return axios.get(GET_USUARIOS_ASIGNADOS_PROFESIONAL(id));
};