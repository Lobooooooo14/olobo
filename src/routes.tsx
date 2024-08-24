import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Construction from "@/pages/construction"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Construction />
  }
])

export default function Routes() {
  return <RouterProvider router={router} />
}
