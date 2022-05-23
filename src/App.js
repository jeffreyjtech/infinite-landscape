import logo from "./logo.svg";
import "./App.css";
// depreciated stylings throwing warnings -> not required
// import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/UserProfile/index.js";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <div id="form">
        <Form />
      </div>
      <div id="profile">
        <Profile />
      </div>
    </div>
  );
}

export default App;
