import axios from "axios"
import { apiUrl } from 'Constants/defaultValues'


const client = axios.create({
  baseURL: apiUrl
})

client.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem('user_id')}`
}

export { client }
