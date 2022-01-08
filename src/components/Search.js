import { useState } from "react";

import styles from "./Search.module.css";

const Search = ({ searchHandler }) => {
  const [query, setQuery] = useState("");

  return (
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
  );
};

export default Search;
