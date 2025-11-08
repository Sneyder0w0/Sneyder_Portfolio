import './App.css';
import { Navbar } from './Navbar/navbar';
import { Banner } from './Banner/banner';
import { About } from './About/about';
import { Skills } from './Skills/skills';
import { Footer } from './Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
