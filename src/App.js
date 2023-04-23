import './App.css';
import SocialLinks from './components/SocialLinks';
import SubTitle from './components/SubTitle';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <SubTitle/>
        <SocialLinks/>
      </header>
    </div>
  );
}

export default App;
