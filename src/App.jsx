import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
/*import Input from "./components/Input";
import Button from "./components/Button";
import inputİmg from "./assets/image.png"*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

/*function App() {
  return (
    <div className="container">
      <img src={inputİmg} alt="background-image" />

      <div className="form-container">
        <form>
          <h1>LOG IN</h1>
          <div className="divider"></div>
          <Input></Input>
          <Button></Button>
        </form>
      </div>
    </div>
  );
}

export default App;*/
