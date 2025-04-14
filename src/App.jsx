import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';

function App() {
  return (
    <div className= 'mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;