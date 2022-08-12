
import './App.css';
import Comment from './components/Comment';
import Navbar from './components/Navbar';
import Post from './components/Post';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="wrapper">
  <Navbar/>
  <Routes>
    <Route path='post' element={<Post/>}/>
    <Route path='comment' element={<Comment/>}/>
  </Routes>
    </div>
  );
}

export default App;
