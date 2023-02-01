import React, {useEffect, useState} from "react";
import postService from "../../service/postService";
import {Post} from "../post/post";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const[postDetails, setPostDetails] = useState(null);

    useEffect(() => {
       postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h1>PostsDetail:</h1>
            {postDetails && <div>userId:{postDetails.userId} <br/> id: {postDetails.id} <br/> title: {postDetails.title} <br/> body: {postDetails.body}</div> }
            <hr/>
            <h1>Posts:</h1>
            {posts.map (post => <Post key = {post.id} post = {post} setPostDetails = {setPostDetails}/>)}

        </div>
    );
};

export {Posts};