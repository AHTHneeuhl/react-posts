import { useState } from "react";
import User from "./User";

import styles from "./Post.module.css";
import { useUsers } from "../hooks/useUsers";

const Post = (props) => {
  const [userIsShown, setUserIsShown] = useState(false);

  const { users } = useUsers();

  const user = users.find((user) => user.id === props.post.userId);

  const showUserHandler = () => {
    setUserIsShown(true);
  };

  const hideUserHandler = () => {
    setUserIsShown(false);
  };

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <p>{props.post.title}</p>
      </div>
      <div className={styles.content}>
        <blockquote>
          <p>{props.post.body}</p>
        </blockquote>
        <figcaption>
          {userIsShown && <User onClose={hideUserHandler} user={user} />}
          <button className='btn' onClick={showUserHandler}>
            {<p>— Author</p>}
          </button>
        </figcaption>
      </div>
    </div>
  );
};

export default Post;
