import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "@/pages/Home"
import ErrorPage from "@/pages/error"
import NotFound from "@/pages/not-found"
import Projects from "@/pages/projects"
import Root from "@/pages/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default function Routes() {
  return <RouterProvider router={router} />
}
