import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/@:username" Component={PostListPage} exact />
      <Route path="/" Component={PostListPage} exact />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/write" Component={WritePage} />
      <Route path="/@:username/:postId" Component={PostPage} />
    </Routes>
  );
}

export default App;
