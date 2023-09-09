import Navbar from './Components/Navbar';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import SkillsList from './Components/SkillsList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Navbar />
      <About />
      <ProjectList />
      <SkillsList />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
