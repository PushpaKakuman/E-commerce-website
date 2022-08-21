import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Fotter from './Components/Fotter';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import React from 'react';


function App() {
  return (
    <div>
    <Router>
      <h1>Pushpa</h1>
      {/* <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>}  />
          </Routes>
        </Container>
      </main>
      <Fotter /> */}
    </Router>
    </div>
  )

}

export default App;
