// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppProducts from './components/products';

function App() {
  return (
    <div className="App">
		
      <header id='header'>
        <AppHeader />
      </header>
      <main>
		
        <AppHero />
        <AppAbout />
        <AppServices />
		<AppProducts/>
        <AppTeams />
        <AppTestimonials />
        <AppBlog />
        <AppContact />		
		
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
	 
    </div>
  );
}

export default App;
