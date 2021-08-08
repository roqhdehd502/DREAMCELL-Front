import React from 'react';

import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Lead,
} from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <div>
      <Row className="justify-content-center">
        {/* logo img */}
        <img
          className="d-block w-100"
          src="https://www.flipwear.es/wp-content/uploads/2014/03/placehold.it-1140x400.gif"
          alt="DREAM CELL"
          height='140'
        />
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col>
          Copyright &copy; by NMW
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col>
          natorque5552@gmail.com
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default FooterComponent;