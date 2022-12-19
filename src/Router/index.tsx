import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../presentations/components/NavBar/index";
import ListAllPost from "../presentations/views/ListAllPosts";
import PostDetail from "../presentations/views/PostDetail";
import Login from "../presentations/components/auth/Login";
import SignUp from "../presentations/components/auth/SingUp";

function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post" element={<ListAllPost />}></Route>
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
