import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function Projects() {
  const navigate = useNavigate()

  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">Em breve</h1>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </main>
  )
}
