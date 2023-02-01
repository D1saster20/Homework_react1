import React, {useEffect, useState} from "react";
import postService from "../service/postService";
import {Post} from "../post/post";
import {axiosService} from "../service/axiosService";


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       postService.getById(5).then(value => value.data).then(value => setPosts([...value]))
    }, [])

    return (
        <div>

            {posts.map (post => <Post key = {post.id} post = {post} />)}

        </div>
    );
};

export {Posts};