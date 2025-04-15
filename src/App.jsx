import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';

function App() {
  return (
    <div className= 'mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
}

export default App;