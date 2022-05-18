import axios from "axios";

// Conecta a URL da API no Axios.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
