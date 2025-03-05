import './App.css'
import './index.css';  // no sirve aun

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';

function App() {
  return (
    <Router>
      <Routes>
        {/* Make "/" load the login screen */}
        <Route path="/" element={<LoginScreen />} />

        {/* Example: route for signup */}
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
}

export default App
