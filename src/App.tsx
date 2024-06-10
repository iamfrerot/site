import "./App.css";
import Hero from "./Components/Hero";
import { ThemeProvider } from "./Components/ThemeProvider";
function App() {
 return (
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
   <Hero />
  </ThemeProvider>
 );
}

export default App;
