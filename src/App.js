import './App.css';
import Footer from './components/Footer';
import Header from './components/containers/domains/headers/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <Body />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
