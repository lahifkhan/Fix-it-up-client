import axios from "axios";

const instance = axios.create({
  baseURL: "https://fix-it-server.vercel.app",
});

const useAxiosInstance = () => {
  return instance;
};
export default useAxiosInstance;
