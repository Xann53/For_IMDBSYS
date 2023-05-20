import { Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import Register from './pages/SignUpPage';
import Login from './pages/LoginPage';
import Profile from './pages/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
