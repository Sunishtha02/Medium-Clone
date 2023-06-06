import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Single from './pages/Single';
import Home2 from './pages/Home2';
import Write from './pages/Write';
import MyBlogs from './pages/MyBlogs';
import EditBlog from './pages/EditBlog';
import { Link, Route, Routes } from 'react-router-dom';
import CategoryPosts from './pages/CategoryPosts';
import BlogDetails from './pages/BlogDetails';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Home2' element={<Home2/>}/>
        <Route exact path='/write' element={<Write/>}/>
        <Route exact path='/posts' element={<CategoryPosts/>}/>
        <Route exact path='/myblogs' element={<MyBlogs/>}/>
        <Route path="/blogs/:id/edit" element={<EditBlog/>} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
    </div>
    </>
  );
}

export default App;
