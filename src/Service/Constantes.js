import Cookies from 'universal-cookie';
import { css } from "@emotion/react";

const cookies = new Cookies();

export const baseUrl = "http://127.0.0.1:8000/api/";
export const apiToken = cookies.get('token');

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;