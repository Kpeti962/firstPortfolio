import Nav from './components/Nav'
import WelcomeText from './components/WelcomeText'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import './styles/app.scss'




function App() {
  return (
    <div className="App">
<Nav />
<WelcomeText />
<AboutMe />
<MySkills />
<MyProjects />
<Contact />
    </div>
  );
}

export default App;
