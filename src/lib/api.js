import axios from "axios";

const api = axios.create({ baseURL: "https://dummyjson.com", timeout: 15000 });

export const fetchUsers = async () => {
  const { data } = await api.get("/users?limit=20");
  return data.users;
};

export const fetchCommentsByUser = async (userId) => {
  const { data } = await api.get("/comments?limit=30");
  const start = (userId * 3) % Math.max(1, data.comments.length - 8);
  return data.comments.slice(start, start + 8);
};

export default api;
