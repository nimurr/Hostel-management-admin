import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addrooms from './compontnts/Addrooms.jsx';
import ModifyRoom from './compontnts/ModifyRoom.jsx';
import AppMembers from './compontnts/AppMembers.jsx';
import Allmembers from './compontnts/Allmembers.jsx';
import Gallery from './compontnts/Gallery.jsx';
import Dashboard from './compontnts/Dashboard/Dashboard';
import Coremembers from './compontnts/Coremembers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/rooms',
        element:<Addrooms></Addrooms>
      },
      {
        path:'/editrooms',
        element:<ModifyRoom></ModifyRoom>
      },
      {
        path:'/addmembers',
        element:<AppMembers></AppMembers>
      },
      {
        path:'/allmembers',
        element:<Allmembers></Allmembers>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/coremembers',
        element:<Coremembers></Coremembers>
      },

    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
