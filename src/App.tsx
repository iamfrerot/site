import "./App.css";
import Hero from "./Components/Hero";
import { ThemeProvider } from "./Components/ThemeProvider";
function App() {
 return (
  <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
   <main className='h-screen dark:bg-black-100 bg-white border border-white dark:border-black-100 overflow-y-scroll no-scrollbar'>
    <Hero />
   </main>
  </ThemeProvider>
 );
}

export default App;
