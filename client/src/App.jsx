import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { checkLogin } from "./auth/authSlice";
import axios from "axios";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import BlogPage from "./Pages/BlogPage";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Stores from "./Pages/Stores";
import Cart from "./Pages/Cart";
import Company from "./Pages/Company";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";
import ChatBot from "./Components/ChatBot";
import ThankYou from "./Pages/ThankYou";

function App() {
  const dispatch = useDispatch();
  // const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    body: "",
    comments: [],
    date: "",
    hidden: false,
  });

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // if (user.token) {
    //   const checkToken = async () => {
    //     const loginToken = user.token.split(",")[0];
    //     dispatch(checkLogin(loginToken));
    //   };
    //   checkToken();
    // }
    const token = localStorage.getItem("token");
    console.log("App.jsx token", token);
    if (token) {
      console.log("App.jsx if token");
      const checkToken = async () => {
        const loginToken = user.token.split(",")[0];
        dispatch(checkLogin(loginToken));
      };
      checkToken();
    }
  }, []);

  // useEffect(() => {
  //   const getBlogs = async () => {
  //     const blogData = await axios.get(
  //       `${import.meta.env.VITE_NODE_SERVER}/blog`
  //     );
  //     console.log("blogData", blogData);
  //     console.log(
  //       "App blogData.data.blogs.reverse()",
  //       blogData.data.blogs.reverse()
  //     );
  //     setBlogs(blogData.data.blogs);
  //   };
  //   getBlogs();
  // }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/locations' element={<Stores />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/company' element={<Company />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/chatbot' element={<ChatBot />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/reviews' element={<BlogPage />} />
        {/* <Route path='/signup/:urlEmail?' element={<SignUp />} /> */}
        <Route path='/product-detail/:id' element={<ProductDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
