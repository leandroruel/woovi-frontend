import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import heroVideo from "./assets/video/hero-video.mp4";
import Logo from "./assets/logo.svg";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex items-center justify-start">
          <Link to="#" className="text-xl font-bold  w-[110px]">
           <img src={Logo} alt="logo" />
          </Link>
          <nav className="hidden md:flex gap-4 ml-9">
            <Link to="#" className="hover:underline">
              Para você
            </Link>
            <Link to="#" className="hover:underline">
              Empresas
            </Link>
            <Link to="#" className="hover:underline">
              Investimentos
            </Link>
            <Link to="#" className="hover:underline">
              Sobre
            </Link>
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
            >
              Abra sua conta
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserIcon className="h-6 w-6" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="#">Wealth Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#">Corporate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#">Investments</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary relative h-screen">
          <div className="bg-gradient-to-r from-slate-950 h-full py-20 md:py-32">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="container flex flex-col items-start justify-center gap-6 text-center relative z-10">
            <h1 className="lg:text-5xl text-3xl font-bold text-primary-foreground md:text-4xl text-left">
              Excelência para ir mais longe com conta corrente, cartão e
              investimentos sob medida
            </h1>
            <p className="max-w-md text-primary-foreground/80 text-left">
              Transforme sua vida financeira e alcance o topo com soluções que
              superam expectativas e apoio de um Banco completo.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground lg:px-16 lg:py-8 px-6 py-3 lg:text-lg text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
            >
              Abra sua conta
            </Link>
          </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-md bg-muted p-6 text-center shadow-sm">
              <CreditCardIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Personal Banking</h3>
              <p className="text-muted-foreground">
                Manage your finances with our range of personal banking products
                and services.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-md bg-muted p-6 text-center shadow-sm">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Business Banking</h3>
              <p className="text-muted-foreground">
                Streamline your business operations with our tailored banking
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-md bg-muted p-6 text-center shadow-sm">
              <WalletIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Wealth Management</h3>
              <p className="text-muted-foreground">
                Grow your wealth with our comprehensive investment and advisory
                services.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-bold">Latest News</h2>
              <p className="max-w-md text-muted-foreground">
                Stay up-to-date with the latest news and announcements from Acme
                Bank.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="py-4">
                  <h3 className="text-lg font-semibold">
                    Introducing our New Mobile App
                  </h3>
                  <p className="text-muted-foreground">
                    Manage your finances on-the-go with our redesigned mobile
                    app.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-4">
                  <h3 className="text-lg font-semibold">
                    Acme Bank Expands to New Locations
                  </h3>
                  <p className="text-muted-foreground">
                    We're excited to announce the opening of our new branches in
                    your area.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-4">
                  <h3 className="text-lg font-semibold">
                    Acme Bank Launches New Wealth Management Services
                  </h3>
                  <p className="text-muted-foreground">
                    Grow your wealth with our comprehensive investment and
                    advisory services.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Acme Bank. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="#" className="hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CreditCardIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function WalletIcon(props: any) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
