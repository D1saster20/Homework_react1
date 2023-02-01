import {Post} from "../post/post";
import {useEffect, useState} from "react";
import postService from "../../service/postService";

const SinglePost = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById().then(value => value.data).then(value => setPost(value))
    }, [])
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {SinglePost};