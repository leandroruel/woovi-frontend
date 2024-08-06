import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ModeToggle } from "./components/ModeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-muted px-4 sm:px-6">
        <nav className="flex items-center gap-4">
          <Link to="#" className="flex items-center gap-2">
            <BanknoteIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary">
              Bank Dashboard
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-sm font-medium">
                  Início
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/accounts" className="px-4 py-2 text-sm font-medium">
                  Contas
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/transfers" className="px-4 py-2 text-sm font-medium">
                  Transferências
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/investiments" className="px-4 py-2 text-sm font-medium">
                  Investimentos
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/settings" className="px-4 py-2 text-sm font-medium">
                  Configurações
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            size="sm"
            className="inline-flex hover:bg-primary hover:text-primary-foreground"
          >
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarFallback className="bg-primary-foreground">
                  <span>JD</span>
                </AvatarFallback>
                <AvatarImage src="https://randomuser.me/api/portraits" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" hover:bg-primary">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:bg-primary">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" hover:bg-primary" onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">{children}</main>
      <footer className="bg-muted p-4 sm:p-6 text-sm">
        <div className="container max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <BanknoteIcon className="h-4 w-4 text-secondary" />
            <span>© 2023 Bank Dashboard. All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-4 text-secondary-foreground">
            <Link to="#" className="text-secondary-foreground">
              Privacy Policy
            </Link>
            <Link to="#" className="text-secondary-foreground">
              Terms of Service
            </Link>
            <Link to="#" className="text-secondary-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BanknoteIcon(props: any) {
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
