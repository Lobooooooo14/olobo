import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">404</h1>
      <p className="mb-2 text-center text-xl">
        Ops. Parece que essa página não existe.
      </p>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </main>
  )
}
