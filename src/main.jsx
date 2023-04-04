import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainContentHome from './components/MainContentHome/MainContentHome';
import FoodData from './components/FoodData/FoodData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <MainContentHome></MainContentHome>,
      },
      {
        path: "/about",
        element: <div><h3>this is about page.</h3></div>,
      },
      {
        path: "/food",
        element: <FoodData></FoodData>,
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
