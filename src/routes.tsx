import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Loading from "@/components/loading"

import Home from "@/pages/Home"
import ErrorPage from "@/pages/error"
import NotFound from "@/pages/not-found"
import Projects from "@/pages/projects"

import ProjectPage from "./pages/project-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: "/projects/:projectId",
    element: <ProjectPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default function Routes() {
  return <RouterProvider router={router} fallbackElement={<Loading expand />} />
}
