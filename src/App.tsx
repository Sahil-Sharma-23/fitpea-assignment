import MainSection from "./components/layout/MainSection";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { ThemeProvider } from "./components/ThemeProvider";

// This will be the layout file for the dashboard page.
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen w-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <MainSection />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
