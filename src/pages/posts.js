import {PostLIst} from "../components/post-list";
import {useEffect, useState} from "react";

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
  }, []);

  return (
      <div>
        <h2>Posts: {posts.length}</h2>
        <p>Here is the list of my posts!</p>
        <PostLIst feed={posts}/>
        <button>load more</button>
      </div>
  )
}
