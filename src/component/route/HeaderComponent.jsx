import React, { useEffect, useState } from 'react';
import AuthenticationService from '../../AuthenticationService.js'

import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Dropdown,
  InputGroup,
  Offcanvas,
} from 'react-bootstrap';

//import ApiService from "../../ApiService";
import "../../App.css";


const HeaderComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  console.log("===Headeromponent===");
  console.log(isUserLoggedIn);

  return (
    <div>
      {/* user info */}
      <Navbar>
        <Container>
          <Navbar.Collapse className="justify-content-start">
            <Navbar.Brand href="/">
              <img
                src="https://www.flipwear.es/wp-content/uploads/2014/03/placehold.it-1140x400.gif"
                alt="DREAM CELL"
                weight='150'
                height='45'
              />
            </Navbar.Brand>
          </Navbar.Collapse>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button size="sm" variant="success" type="button" onClick={handleShow}>
              <span className="material-icons">
                search
              </span><br />
              검색
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>통합검색</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex">
                  <InputGroup size="sm" className="mb-3">
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <Button type="button" variant="success">
                      <span className="material-icons">
                        search
                      </span>
                    </Button>
                  </InputGroup>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>
            &nbsp;
            <Navbar.Text>
              {!isUserLoggedIn && <Button size="sm" variant="info" type="button" href="/login"><span class="material-icons">login</span><br />로그인</Button>}
              {/* <Button size="sm" variant="info" type="button" href="/login">
                <span class="material-icons">login</span><br />로그인
              </Button> */}
              {isUserLoggedIn && <Button size="sm" variant="info" type="button" href="/logout" onClick={AuthenticationService.logout}><span class="material-icons">logout</span><br />로그아웃</Button>}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /><br />

      {/* contents nav */}
      <Nav className="justify-content-center" activeKey="/home">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            NEWS
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/news/notice">공지사항</Dropdown.Item>
            <Dropdown.Item href="/news/event">이벤트</Dropdown.Item>
            <Dropdown.Item href="/news/magazine">매거진</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        &nbsp;
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            COMMUNITY
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/board/share">공유게시판</Dropdown.Item>
            <Dropdown.Item href="/board/community">자유게시판</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        &nbsp;
        <Button variant="light" href="/cell">
          CELL
        </Button>
      </Nav>
      <br /><br />
    </div>
  );
}

export default HeaderComponent;