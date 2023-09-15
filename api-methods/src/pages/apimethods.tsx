import axios from "axios";
export const apiHandle = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Authorization:`Bearer`
    }
});
export const Get = (endpoint:string,id?:string|number) => {
    return apiHandle.get(`${endpoint}/${id?id:''}`)
}
export const Post = (endpoint: string, model:object) => {
  return apiHandle.post(`${endpoint}`,model);
};
export const Delete = (endpoint: string, id?: string | number) => {
  return apiHandle.delete(`${endpoint}/${id ? id : ""}`);
};
export const Put = (endpoint: string,model:object, id?: string | number) => {
  return apiHandle.put(`${endpoint}/${id ? id : ""}`, model);
};