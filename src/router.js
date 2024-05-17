import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './Form'
import Table from './Table'
import ThankYou from './ThankYou'
const Routers = () => {

const router = createBrowserRouter([
  {
    path: "add",
    element: <App/>
  },
  {
    path: "/",
    element:<Table/> ,
  },
   {
    path: "thankyou",
    element:<ThankYou/> ,
  },
]);
  return (
    <RouterProvider router={router} />
  )
}

export default Routers