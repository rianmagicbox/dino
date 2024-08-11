import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home';
import Start from './routes/Start';
import HowToPlay from './routes/HowToPlay';
import ErrorPage from './routes/ErrorPage';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },  
      {
        path: "/start",
        element: <Start/>
      },
      {
        path: "/howtoplay",
        element: <HowToPlay/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
