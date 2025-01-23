import {baseUrl} from "./api.service.ts";

export const getPosts = async () => await fetch(`${baseUrl}/posts`).then(res=> res.json())