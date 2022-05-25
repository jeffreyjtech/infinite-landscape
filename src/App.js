import logo from "./logo.svg";
import "./App.css";
// depreciated stylings throwing warnings -> not required
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Profile from "./components/UserProfile/index.js";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">\
    <div id='header'>
      <Header />
    </div>
      <div id="form">
        <Form />
      </div>
      <div id="profile">
        <Profile />
      </div>
      <div id='foorter'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
