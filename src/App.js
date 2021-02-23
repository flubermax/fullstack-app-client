import { Route } from 'react-router-dom';

import { Header, Footer } from './components'
import { default as Main } from './pages/Main'
import { default as NewAd } from './pages/NewAd'

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/new" component={NewAd} />
      <Footer />
    </div>
  );
}

export default App;
