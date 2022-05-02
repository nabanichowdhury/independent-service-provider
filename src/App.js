import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/RegisterAndLogin/Login/Login";
import Register from "./Pages/RegisterAndLogin/Register/Register";
import RequiredAuth from "./Pages/RequiredAuth/RequiredAuth";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="bg-dark">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/services/:serviceId"
          element={
            <RequiredAuth>
              <ServiceDetails></ServiceDetails>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
