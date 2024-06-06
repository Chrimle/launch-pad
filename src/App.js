import './App.css';
import Description from './components/Description';
import Footer from './components/Footer';
import SocialLinks from './components/containers/domains/socials/SocialLinks';
import SocialMediaLinks from './components/SocialMediaLinks';
import SubTitle from './components/SubTitle';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <SubTitle />
        <Description />
        <SocialLinks />
        <SocialMediaLinks />
        <Footer />
      </header>
    </div>
  );
}

export default App;
