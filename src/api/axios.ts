import axios from "axios"

export const api = axios.create({
  baseURL: "https://example/api/v1/"
})
