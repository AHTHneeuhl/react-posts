import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Posts from "./pages/posts/Posts";
import { usePosts } from "./hooks/usePosts";
import Loading from "./components/Loading";

const App = () => {
  const { authIsReady, user } = useAuthContext();
  const { isPending } = usePosts();

  return (
    <Fragment>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {isPending && <Loading />}
            {!isPending && (
              <Route
                path='/'
                element={user ? <Home /> : <Navigate replace to='/login' />}
              />
            )}
            {!isPending && (
              <Route
                path='/posts'
                element={user ? <Posts /> : <Navigate replace to='/login' />}
              />
            )}
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate replace to='/' />}
            />
            <Route
              path='/signup'
              element={!user ? <SignUp /> : <Navigate replace to='/' />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </Fragment>
  );
};

export default App;
