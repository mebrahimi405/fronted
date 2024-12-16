import axios from "axios";

const API_BASE_URL = "https://api.example.com";

export function getPosts() {
  return axios.get(`${API_BASE_URL}/posts`);
}

export function createPost(data) {
  return axios.post(`${API_BASE_URL}/posts`, data);
}
