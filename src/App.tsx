import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from 'context/user-context';
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
