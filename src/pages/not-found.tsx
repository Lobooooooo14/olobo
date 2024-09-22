import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  const navigate = useNavigate()

  const { t } = useTranslation()

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">
        {t("notfound.404")}
      </h1>
      <p className="mb-2 text-center text-xl">{t("notfound.pageNotFound")}</p>
      <Button onClick={() => navigate(-1)}>{t("notfound.back")}</Button>
    </main>
  )
}
