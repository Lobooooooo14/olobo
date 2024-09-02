import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string }
  console.error(error)

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">Eita!</h1>
      <p className="mb-2 text-center text-xl">Oops. Algo deu errado.</p>
      <p className="font-mono text-sm">{`<${error.statusText || error.message}/>`}</p>
    </main>
  )
}
