import React from 'react';

import  { Container, Row, Col } from 'react-bootstrap' ;

import Header from './component/route/HeaderComponent'
import Navigation from './component/route/NavigationComponent'
import Content from './component/route/ContentComponent';
//import Aside from './component/route/AsideComponent'
//import Footer from './component/route/FooterComponent';

function App() {
  return (
    <div>
      <Container fluid="md" mx={1} className="justify-content-md-center">
        <Header />
        <Row>
          <Content />
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default App; 