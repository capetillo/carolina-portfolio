import React from 'react';
import carolina from "../src/components/Images/carolina.jpg"
import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import {Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header />
      <Row >
        <Col sm={12} md={6}>
          <About />
        </Col>
        <Col sm={12} md={6} className="align-self-center">
          <div className="photo">
          <img src={carolina} alt="Carolina, me, the creator of this portfolio" className="caro"/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
