import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const baseUrl = "http://127.0.0.1:8000/api/";
export const apiToken = cookies.get('token');