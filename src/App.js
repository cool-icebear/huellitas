import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


function App() {
  return (
<div class="flex flex-col min-h-[100dvh]"><header class="px-4 lg:px-6 py-6 lg:py-10 flex items-center"><div class="container flex items-center gap-4 px-4 md:px-6"><a class="flex items-center justify-center space-x-2 text-2xl font-bold" href="#" rel="ugc"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 rounded-full bg-gray-200/40 backdrop-filter backdrop-blur-sm p-0.5"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg><span>Huellitas de Amor</span></a><nav class="ml-auto flex gap-4 sm:gap-6"><a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Adopción
        </a><a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Voluntariado
        </a><a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Donaciones
        </a><a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Contacto
        </a></nav></div></header><main class="flex-1"><section class="w-full py-6 md:py-12 lg:py-16 xl:py-20"><div class="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10"><div class="space-y-2"><h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Encuentra a tu nuevo mejor amigo
          </h1><p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Estos amigos peludos están buscando un hogar para siempre. Ver
            perros y gatos disponibles para adopción.
          </p></div><div class="flex gap-4 sm:gap-6"><a class="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
            Ver perros
          </a><a class="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
            Ver gatos
          </a></div></div></section><section class="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800"><div class="container px-4 md:px-6"><div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"><img src="/placeholder.svg" width="550" height="310" alt="Hero" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"><div class="flex flex-col justify-center space-y-4"><div class="space-y-2"><h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Más formas de ayudar
              </h2><p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Tu donación nos ayuda a proporcionar atención médica,
                comida y amor a los animales necesitados.
              </p></div><a class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
              Hacer una donación
            </a></div></div></div></section><section class="w-full py-12 md:py-24"><div class="container px-4 md:px-6"><div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"><div class="flex flex-col justify-center space-y-4"><div class="space-y-2"><h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Conoce a nuestros amigos peludos
              </h2><p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Estos amigos peludos están buscando un hogar para siempre.
                Contacta con nosotros para más información sobre la
                adopción.
              </p></div><a class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
              Contactar
            </a></div><div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><img src="/placeholder.svg" alt="Dog" width="400" height="225" class="aspect-video overflow-hidden object-cover"><div class="p-4"><h3 class="font-bold">Rocky</h3><p class="text-sm text-gray-500 dark:text-gray-400">
                  Rocky es un perro cariñoso y juguetón que le encanta
                  correr.
                </p></div><div class="flex items-center p-6"><a class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
                  Ver más
                </a></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><img src="/placeholder.svg" alt="Dog" width="400" height="225" class="aspect-video overflow-hidden object-cover"><div class="p-4"><h3 class="font-bold">Luna</h3><p class="text-sm text-gray-500 dark:text-gray-400">
                  Luna es una perrita dulce y tranquila que le encanta
                  pasear.
                </p></div><div class="flex items-center p-6"><a class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
                  Ver más
                </a></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><img src="/placeholder.svg" alt="Dog" width="400" height="225" class="aspect-video overflow-hidden object-cover"><div class="p-4"><h3 class="font-bold">Max</h3><p class="text-sm text-gray-500 dark:text-gray-400">
                  Max es un perro amigable y leal que le encanta jugar con
                  la pelota.
                </p></div><div class="flex items-center p-6"><a class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
                  Ver más
                </a></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><img src="/placeholder.svg" alt="Dog" width="400" height="225" class="aspect-video overflow-hidden object-cover"><div class="p-4"><h3 class="font-bold">Coco</h3><p class="text-sm text-gray-500 dark:text-gray-400">
                  Coco es un perro inteligente y cariñoso que le encanta
                  hacer trucos.
                </p></div><div class="flex items-center p-6"><a class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
                  Ver más
                </a></div></div></div></div></div></section><section class="w-full py-12 md:py-24"><div class="container grid items-center gap-4 px-4 text-center md:px-6"><div class="space-y-2 md:space-y-4 lg:space-y-2"><h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            ¿Cómo puedes ayudar?
          </h2><p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Tu donación nos ayuda a proporcionar atención médica, comida y
            amor a los animales necesitados.
          </p></div><div class="mx-auto w-full max-w-sm space-y-2"><form class="flex space-x-2"><input type="email" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1" placeholder="Enter your email"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit">Sign Up</button></form><p class="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch.
            <a class="underline underline-offset-2" href="#" rel="ugc">
              Terms &amp; Conditions
            </a></p></div></div></section></main><footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"><p class="text-xs text-gray-500 dark:text-gray-400">
      © 2024 Huellitas de Amor. Todos los
      derechos reservados.
    </p><nav class="sm:ml-auto flex gap-4 sm:gap-6"><a class="text-xs hover:underline underline-offset-4" href="#" rel="ugc">
        Términos de servicio
      </a><a class="text-xs hover:underline underline-offset-4" href="#" rel="ugc">
        Privacidad
      </a></nav></footer></div>
  );
}
export default App;
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-6 lg:py-10 flex items-center">
        <div className="container flex items-center gap-4 px-4 md:px-6">
          <Link className="flex items-center justify-center space-x-2 text-2xl font-bold" href="#">
            <PawPrintIcon className="w-6 h-6 rounded-full bg-gray-200/40 backdrop-filter backdrop-blur-sm p-0.5" />
            <span>Huellitas de Amor</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Adopción
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Voluntariado
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Donaciones
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Encuentra a tu nuevo mejor amigo
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Estos amigos peludos están buscando un hogar para siempre. Ver perros y gatos disponibles para adopción.
              </p>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Ver perros
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Ver gatos
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Más formas de ayudar</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Tu donación nos ayuda a proporcionar atención médica, comida y amor a los animales necesitados.
                  </p>
                </div>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Hacer una donación
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conoce a nuestros amigos peludos</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Estos amigos peludos están buscando un hogar para siempre. Contacta con nosotros para más
                    información sobre la adopción.
                  </p>
                </div>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contactar
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                <Card>
                  <img
                    alt="Dog"
                    className="aspect-video overflow-hidden object-cover"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold">Rocky</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Rocky es un perro cariñoso y juguetón que le encanta correr.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Ver más
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <img
                    alt="Dog"
                    className="aspect-video overflow-hidden object-cover"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold">Luna</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Luna es una perrita dulce y tranquila que le encanta pasear.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Ver más
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <img
                    alt="Dog"
                    className="aspect-video overflow-hidden object-cover"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold">Max</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Max es un perro amigable y leal que le encanta jugar con la pelota.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Ver más
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <img
                    alt="Dog"
                    className="aspect-video overflow-hidden object-cover"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold">Coco</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Coco es un perro inteligente y cariñoso que le encanta hacer trucos.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Ver más
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2 md:space-y-4 lg:space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">¿Cómo puedes ayudar?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Tu donación nos ayuda a proporcionar atención médica, comida y amor a los animales necesitados.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Huellitas de Amor. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function PawPrintIcon(props) {
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
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}

      }
    </div>
  );
}
