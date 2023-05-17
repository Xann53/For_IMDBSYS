import { Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import Register from './pages/SignUpPage';
import Login from './pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
