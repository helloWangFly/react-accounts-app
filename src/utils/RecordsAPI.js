import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5a54227777e1d20012fa0723.mockapi.io"

export const getAll = () =>
  axios.get(`${api}/api/v1/records`)

export const create = (body) =>
  axios.post(`${api}/api/v1/records`, body)
