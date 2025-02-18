import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Home} from './Pages/Home';
import {Flights} from './Pages/Services/Flights';
import {Hotels} from './Pages/Services/Hotels';
import {Cab} from './Pages/Services/Cab';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './Components/Header';
import { Login } from './Login/Login';
import { Forex } from './Pages/Services/Forex';
import Register from './Login/Register';
import { About } from './Pages/Services/WhoWeAre';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
        path : '/', //LocalHost
        element : <Home/>
    },
    {
      path:'/Flights',
      element:<Flights/>
    },
    {
      path:'/Hotels',
      element:<Hotels/>
    },
    {
      path:'/Cab',
      element:<Cab/>
    },
    {
      path:'/Forex',
      element:<Forex/>

    },
    {
      path:'/WhoWeAre',
      element:<About/>
    },
    {
      path:'/Login',
      element:<Login/>
    },
    {
      path:'Login/Register',
      element:<Register/>
    }

  ]
)
root.render(
  <React.StrictMode>
    
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
