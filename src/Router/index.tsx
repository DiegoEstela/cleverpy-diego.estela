import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../presentations/components/NavBar/index'
import ListAllPost from '../presentations/components/ListAllPosts'
import PostDetail from '../presentations/components/PostDetail'

function Router() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ListAllPost />}></Route>
        <Route path='/category/:categoryName' element={<ListAllPost />} />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route path='/category/:categoryName/post/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default Router