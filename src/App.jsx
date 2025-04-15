import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Project from './components/project/project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className= 'mx-auto max-w-7xl px-10 space-y-20 '>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;