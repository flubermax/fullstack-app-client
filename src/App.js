import { Route } from 'react-router-dom';
import styled from 'styled-components'

import { Header, Footer } from './components'
import { default as Main } from './pages/Main'
import { default as NewAd } from './pages/NewAd'

import './App.scss';

const StyledApp = styled.div`
max-width: 1170px;
margin: 15px auto;
padding: 10px;
background-color: #fff;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`
const App = (props) => {
  return (
    <StyledApp {...props}>
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/new" component={NewAd} />
      <Footer />
    </StyledApp>
  )
}

export default App;
