/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3DgtDKgeTk1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2 font-bold text-blue-500" prefetch={false}>
            <MountainIcon className="h-6 w-6 fill-blue-500" />
            <span>UNANGuide.edu.ni</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Mapa del Campus
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Aulas y Horarios
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Directorio de Servicios
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Calendario de Eventos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Iniciar Sesión
            </Button>
            <Button className="hidden sm:inline-flex">Registrarse</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="sm:hidden">
                <div className="grid gap-4 p-4">
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Mapa del Campus
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Aulas y Horarios
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Directorio de Servicios
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
                    prefetch={false}
                  >
                    Calendario de Eventos
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full">
                      Iniciar Sesión
                    </Button>
                    <Button className="w-full">Registrarse</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bienvenido a UNANGuide.edu.ni
              </h1>
              <p className="text-muted-foreground">
                Descubre y navega por el campus de la UNAN-León con nuestra plataforma integral de guía y orientación.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="w-full sm:w-auto">Explorar el Mapa</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Ver Aulas y Horarios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Campus Map"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute top-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <span>Edificio Principal</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Classroom"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <PencilIcon className="h-5 w-5 text-primary" />
                  <span>Aula 101</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Aulas y Horarios</h2>
              <p className="text-muted-foreground">
                Encuentra información detallada sobre la ubicación, capacidad y horarios de cada aula y laboratorio en
                el campus.
              </p>
              <Button variant="outline">Explorar Aulas y Horarios</Button>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Directorio de Servicios</h2>
              <p className="text-muted-foreground">
                Descubre todos los servicios y recursos disponibles en el campus, desde bibliotecas hasta oficinas
                administrativas.
              </p>
              <Button variant="outline">Explorar Directorio</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Services"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute top-4 right-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <BuildingIcon className="h-5 w-5 text-primary" />
                  <span>Biblioteca Central</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Events"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <span>Conferencia de Emprendimiento</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Calendario de Eventos</h2>
              <p className="text-muted-foreground">
                Mantente al tanto de todas las actividades, conferencias y eventos que se llevan a cabo en el campus.
              </p>
              <Button variant="outline">Ver Calendario de Eventos</Button>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Acceso a Plataformas</h2>
              <p className="text-muted-foreground">
                Aprende cómo acceder a las diferentes plataformas y sistemas de la UNAN-León, como el campus virtual, el
                sistema de gestión académica y más.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="outline">Acceder al Campus Virtual</Button>
                <Button variant="outline">Gestión Académica</Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Platforms"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute top-4 right-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <LaptopIcon className="h-5 w-5 text-primary" />
                  <span>Plataformas UNAN-León</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Submissions"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <UploadIcon className="h-5 w-5 text-primary" />
                  <span>Subir Trabajos</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Subir Trabajos</h2>
              <p className="text-muted-foreground">
                Aprende cómo subir tus trabajos, tareas y proyectos a las diferentes plataformas de la UNAN-León de
                manera sencilla e interactiva.
              </p>
              <Button variant="outline">Instrucciones para Subir Trabajos</Button>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Tutorials"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <VideoIcon className="h-5 w-5 text-primary" />
                  <span>Tutoriales</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Tutoriales</h2>
              <p className="text-muted-foreground">
                Encuentra tutoriales detallados sobre cómo acceder a las plataformas de la universidad, cómo subir
                trabajos y cómo llegar a cada aula.
              </p>
              <Button variant="outline">Ver Tutoriales</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background/80 py-6 backdrop-blur">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-sm font-medium">UNANGuide.edu.ni</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm transition-colors hover:text-muted-foreground" prefetch={false}>
              Términos de Uso
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-muted-foreground" prefetch={false}>
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-muted-foreground" prefetch={false}>
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}