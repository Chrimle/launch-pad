import './App.css';
import Description from './components/Description';
import Footer from './components/Footer';
import SocialLinks from './components/containers/domains/socials/SocialLinks';
import SocialMediaLinks from './components/containers/domains/social-media/SocialMediaLinks';
import SubTitle from './components/SubTitle';
import Title from './components/Title';

function App() {
  return (
    <div>
      <header>
        <Title />
        <SubTitle />
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
