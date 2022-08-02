import axios from 'axios'

const http= axios.create({
  baseURL: "https://api.realworld.io/api",
  headers: {
    accept: "application/json, text/plain, */*",
    withCredentials: true,
    "Content-Type": "application/json",
  },
})

export default http