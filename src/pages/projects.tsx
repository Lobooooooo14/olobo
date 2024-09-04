import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function Projects() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">
        {t("projects.title")}
      </h1>
      <Button onClick={() => navigate(-1)}>{t("projects.back")}</Button>
    </main>
  )
}
