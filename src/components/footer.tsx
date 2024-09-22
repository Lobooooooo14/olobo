import { P } from "./typography"

export default function Footer() {
  return (
    <footer className="flex h-20 items-center justify-center border-t border-border px-6">
      <div>
        <P className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:underline"
            href="https://github.com/Lobooooooo14/"
          >
            Lobooooooo14
          </a>
        </P>
      </div>
    </footer>
  )
}
