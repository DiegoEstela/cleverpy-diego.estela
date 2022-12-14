import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../presentations/components/NavBar/index'
import ListAllPost from '../presentations/components/ListAllPosts'

function Router() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ListAllPost />}></Route>
        <Route path='/category/:categoryName' element={<ListAllPost />} />
        <Route path='/item/:id' element={<ListAllPost />} />
        <Route path='/category/:categoryName/item/:id' element={<ListAllPost />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default Router