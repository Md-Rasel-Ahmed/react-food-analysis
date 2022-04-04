import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Review from "./components/Review/Review";
import Blog from "./components/Blog/Blog";
import NotFounded from "./components/NotFounded/NotFounded";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFounded></NotFounded>}></Route>
      </Routes>
    </div>
  );
}

export default App;
