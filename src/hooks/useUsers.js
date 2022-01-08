import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export const useUsers = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = (url) => {
    setIsPending(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
    setIsPending(false);
  };

  useEffect(() => {
    fetchUsers(url);
  }, []);

  return { users, error, isPending };
};
