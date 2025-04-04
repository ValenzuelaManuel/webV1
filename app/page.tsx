import Link from "next/link"
import { Mail, MapPin, Music, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-xl font-medium">
            Manuel Valenzuela
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#works" className="text-sm font-medium transition-colors hover:text-primary">
              Works
            </Link>
            <Link href="#performances" className="text-sm font-medium transition-colors hover:text-primary">
              Performances
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Link href="#works">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Listen
          </Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Manuel Valenzuela
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Composer • Producer • Educator
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#works">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Listen to My Music
                  </Button>
                  </Link>
                  <Link href="#contact">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Me
                  </Button>
                  </Link>
                </div>
              </div> 
              <img
                src="/main.jpg"
                alt="Manuel Valenzuela"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About</div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Biography</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Manuel Valenzuela is a Chilean composer and music educator based in Berlin, Germany. He holds a Bachelor's degree in Composition from the Pontifical Catholic University of Chile, where he studied under Aliocha Solovera. He also has attended masterclasses with composers such as Luis Naón and Richard Barrett. After completing his degree, he pursued studies in music pedagogy, a field in which he has worked at both the school and university levels. 
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/retrato.jpeg?height=400&width=400"
                width="400"
                height="400"
                alt="Manuel Valenzuela composing"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-semibold">Philosophy</h3>
                      <p>I don't aim to shock just for the sake of disruption. My practice is centered around discovery and growth, where each new piece represents an exploration of sonic possibilities. 
                      </p>
                      <p>Sound is the foundation of my practice, and I use the resources at my disposal—extended techniques, unconventional approaches, or subtle alterations like microtones—not to ornament the score, but to build an immersive sonic world.
                      </p>
                       <p>I believe in balance: the blending of innovation with tradition, and the ongoing process of self-improvement that guides my work.
                       </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Compositions</div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Selected Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A collection of Valenzuela's most significant compositions across various ensembles.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Agave",
                  year: "2025",
                  type: "Electronic",
                  url: "https://soundcloud.com/manuelvalenzuelacomposer/agave-for-electronics",
                  description: "Exploration on the materiality of work. Based on a field recording of jimadores cutting agave at Tequila. Part of Sonic Heritage Project, UK.",
                },
                {
                  title: "Animal",
                  year: "2024",
                  type: "Chamber Music",
                  description: "Calm and melodic piece, for alto saxophone and guitar. Performed by Juan Jose Vara and Felipe Santibañez.",
                  url: "https://soundcloud.com/manuelvalenzuelacomposer/animal-for-alto-saxophone-and-guitar-2024"
                },
                {
                  title: "Cemetery of Splendour",
                  year: "2023",
                  type: "Mixed",
                  url: "https://www.youtube.com/watch?v=uKHuEdyxnJc",
                  description: "Both haunting and dramatic, this piece was inspired by the film of the same name by Apichatpong Weerasethakul. Performed by Fractal Guitar Trio, MX. ",
                },
                {
                  title: "Memoria",
                  year: "2023",
                  type: "Chamber Music",
                  url: "https://www.youtube.com/watch?v=Ut5qYY2daFY",
                  description: "Impressionistic piece inspired by Apichatpong's film of the same name. Perfomed by Ensamble Contemporáneo UC.",
                },
                {
                  title: "A veces nublado",
                  year: "2023",
                  type: "String Quartet",
                  description: "Dramatic piece composed during the pandemic. An accessible introduction to my harmonic and rhyhtmic language.",
                  url: "https://www.youtube.com/watch?v=TXItts3C6II"
                },
                {
                  title: "Desasosiego",
                  year: "2022",
                  type: "Solo",
                  url: "https://www.youtube.com/watch?v=nUKn4spuyqs",
                  description: "A multipercussion piece for marimba and percussion set. Performed by Sebastian Nahuelcoy.",
                },
              ].map((work, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-500">{work.type}</span>
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-bold">{work.title}</h3>
                      <p className="text-sm text-gray-500">{work.year}</p>
                      <p className="mt-2 text-gray-500">{work.description}</p>
                      <div className="mt-4 flex items-center gap-2">
                      <a href={work.url} target="_blank" rel="noopener noreferrer">
  <Button variant="outline" size="sm" className="gap-1">
    <Play className="h-3.5 w-3.5" />
    Listen
  </Button>
</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="performances" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Calendar</div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Upcoming Performances</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Where you can hear Valenzuela's music performed live in the coming months.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              {[
                {
                  date: "June 2025",
                  title: ".abeceda Contemporary Music Festival",
                  location: "Bled Festival Hall, Slovenia",
                  work: "Entzauberung, for ensemble (premiere)",
                },
                {
                  date: "July 2025",
                  title: "Valencia International Performing Arts Festival",
                  location: "Conservatorio Superior de Música de Valencia, Spain",
                  work: "Glitch, for string quartet and live electronics (premiere)",
                },
              ].map((event, index) => (
                <div key={index} className="flex flex-col gap-4 rounded-xl border p-6 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-semibold">{event.date.split(",")[0].split(" ")[0]}</span>
                      <span className="text-xl font-bold">{event.date.split(",")[0].split(" ")[1]}</span>
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-500">Featuring: {event.work}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-serif font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                For commissions, performances, or any inquiries, please reach out using the contact form or direct
                email.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a 
                 href="mailto:mvalenzuelacomposer@icloud.com" 
                 target="_blank" 
                   rel="noopener noreferrer"
                    >
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Directly
                </Button>
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form id="contact" action="submit.php" method="post" className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Manuel Valenzuela. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

