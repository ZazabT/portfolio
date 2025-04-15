import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className= 'mx-auto max-w-7xl px-10 space-y-20 '>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;