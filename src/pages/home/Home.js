import { Fragment } from "react";
import Post from "../../components/Post";
import { usePosts } from "../../hooks/usePosts";

import styles from "./Home.module.css";

const Home = () => {
  const { posts, error } = usePosts();

  return (
    <Fragment>
      {error && <p className='error'>Not able to fetch Posts!</p>}
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

export default Home;
