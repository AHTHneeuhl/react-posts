import { Fragment, useState } from "react";
import Post from "../../components/Post";
import { usePosts } from "../../hooks/usePosts";

import styles from "./Posts.module.css";

const Posts = () => {
  const { posts, error, setPosts, fetchPosts } = usePosts();
  const [query, setQuery] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();

    console.log(query);

    if (query.length > 0) {
      setPosts((prevPosts) => {
        return prevPosts.filter(
          (post) => post.title.includes(query) || post.body.includes(query)
        );
      });
    } else {
      fetchPosts("https://jsonplaceholder.typicode.com/posts/?_limit=10");
    }
  };

  return (
    <Fragment>
      <form className={styles.search}>
        <input
          type='text'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className='btn' onClick={searchHandler}>
          Search
        </button>
      </form>

      {error && <p className='error'>Not able to fetch Posts!</p>}
      {posts.length === 0 && <h3 className='error'>No Post Found!</h3>}
      {!error && (
        <div className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Posts;
