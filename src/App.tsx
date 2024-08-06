import AuthProvider from "@/providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
