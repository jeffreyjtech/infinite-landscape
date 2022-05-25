import logo from "./logo.svg";
import "./App.css";
// depreciated stylings throwing warnings -> not required
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/UserProfile/index.js";
import Form from "./components/Form";

import Explore from './components/Explore'

/** App is the function container for rendering Explore, Profile, and Form components */
function App() {
  return (
    <div className="App">
    {/* Creating routing paths for App's children components */}
      <BrowserRouter>
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Form />} />
            <Route path="/" element={<Explore />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
