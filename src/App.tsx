import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Redirect  } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import "./App.scss";
import PrivacyPolicy from 'components/Privacy/Privacypolicy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/privacy" element={<PrivacyPolicy values={undefined}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
