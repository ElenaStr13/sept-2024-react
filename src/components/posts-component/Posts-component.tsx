import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "./Post-Component.tsx";
import {getPosts} from "../../services/posts.api.service.ts";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts<ICartResponseModel & {posts:IPost[]}>('/posts')
            .then(({posts}) => setPosts(posts))
    }, []);
    return (
        <div>
            {
                posts.map((post:IPost) => < PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};