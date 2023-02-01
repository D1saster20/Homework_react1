import {axiosService} from "./axiosService";


const postService = {
    getAll: () => axiosService.get('/posts'),
    getById: (userId) =>axiosService.get(`/posts/${userId}`)
};

export default postService