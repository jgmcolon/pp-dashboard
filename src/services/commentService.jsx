import httpAxios from "./index";

export const getComments = () => {
  return httpAxios.get("/comments");
};
