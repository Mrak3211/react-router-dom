import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Userpage from "./components/Userpage";
import User from "./components/User";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";
// import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:name" element={<Userpage />} />
          <Route path="/filter/:age/:city" element={<Filter />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
