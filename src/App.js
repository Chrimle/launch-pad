import Footer from './components/containers/Footer';
import Header from './components/containers/Header';
import Body from './components/containers/Body';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/containers/NotFound';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
