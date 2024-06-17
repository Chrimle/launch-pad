import './App.css';
import Description from './components/Description';
import Footer from './components/Footer';
import SocialLinks from './components/containers/domains/socials/SocialLinks';
import SocialMediaLinks from './components/containers/domains/social-media/SocialMediaLinks';
import Header from './components/containers/domains/headers/Header';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <Description />
        <SocialLinks />
        <SocialMediaLinks />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
