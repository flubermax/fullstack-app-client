import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components'
import { default as Main } from './pages/Main'
import { default as NewAd } from './pages/NewAd'
import { default as SingleAd } from './pages/Single'

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/new" component={NewAd} />
        <Route path="/single" component={SingleAd} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
