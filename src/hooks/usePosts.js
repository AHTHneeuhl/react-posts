import { useState, useEffect } from "react";

const url = "http://jsonplaceholder.typicode.com/posts/?_limit=10";

export const usePosts = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = (url) => {
    setIsPending(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
    setIsPending(false);
  };

  useEffect(() => {
    fetchPosts(url);
  }, []);

  return { posts, error, isPending, setPosts, fetchPosts };
};
