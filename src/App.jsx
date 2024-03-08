// data
import Config from './data/config.json';
// layout
import ClientLayout from './routes/client/layout';
// pages
import SignUp from "./routes/client/pages/SignUp.jsx"
import SignIn from "./routes/client/pages/SignIn.jsx"
import ResetPassword from "./routes/client/pages/ResetPassword.jsx";
import NotFound from './routes/NotFound.jsx';
// utils
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './routes/landingPage/main.jsx';

function App() {
  console.log('me');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage Config={Config} />} />
        <Route path="/home" element={<ClientLayout Config={Config} />} />
        <Route path="/reset-password" element={<ResetPassword Config={Config} />} />
        <Route path="/signin" element={<SignIn Config={Config} />} />
        <Route path="/signup" element={<SignUp Config={Config} />} />
        <Route path="*" element={<NotFound Config={Config} />} />
      </Routes>
    </Router>
  );
}

export default App;
