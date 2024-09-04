import { useForm } from "react-hook-form"
import { Trans, useTranslation } from "react-i18next"

import { zodResolver } from "@hookform/resolvers/zod"
import { ExternalLinkIcon, MailIcon } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  subject: z
    .string()
    .min(2, { message: "Por favor, insira um assunto" })
    .max(50, { message: "Assunto muito grande" }),
  body: z
    .string()
    .min(2, { message: "Por favor, insira o corpo do email" })
    .max(1000, { message: "Corpo muito grande" })
})

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="min-h-screen py-16">
      <div className="mb-6 flex w-full flex-col items-center">
        <h2 className="mb-2 mt-4 text-center text-4xl font-bold">
          {t("home.contact.title")}
        </h2>
        <Separator className="w-1/3" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <Card className="w-full max-w-[600px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MailIcon size={32} />
              {t("home.contact.card.title")}
            </CardTitle>
            <CardDescription className="text-pretty leading-relaxed">
              <Trans
                i18nKey="home.contact.card.description"
                values={{ email: "lobooooooo14@gmail.com" }}
                components={[
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"></code>
                ]}
              />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function ProfileForm() {
  const { t } = useTranslation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      body: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.open(
      `mailto:lobooooooo14@gmail.com?subject=${values.subject}&body=${values.body}`
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("home.contact.card.form.subject.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("home.contact.card.form.subject.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("home.contact.card.form.subject.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("home.contact.card.form.body.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("home.contact.card.form.body.placeholder")}
                  {...field}
                  className="h-48 resize-none"
                />
              </FormControl>
              <FormDescription>
                {t("home.contact.card.form.body.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full gap-2" type="submit">
          {t("home.contact.card.form.send")} <ExternalLinkIcon size={16} />
        </Button>
      </form>
    </Form>
  )
}
