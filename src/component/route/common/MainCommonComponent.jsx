import React, { Component } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";

import {
  Carousel,
  Tabs,
  Tab,
  Card,
  Row,
  Col,
  Badge,
} from 'react-bootstrap';
import {
  Search,
  Pencil,
  StarFill,
} from 'react-bootstrap-icons';


class MainCommonComponent extends Component {
  render() {
    return (
      <div>
        {/* 케로셀 이미지 슬라이드 */}
        <Carousel>
          <Carousel.Item>
            <a href="#">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1529177926897-1d894ca01471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="First slide"
                height='400'
              />
            </a>
            <Carousel.Caption>
              <h5>공유게시판</h5>
              <h1>CELL - TITLE</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="#">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1490131681458-a08259e7627d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Third slide"
                height='400'
                fluid
              />
            </a>
            <Carousel.Caption>
              <h5>이벤트</h5>
              <h1>EVENT - TITLE</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="#">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1544913776-90c1223073a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt="Second slide"
                height='400'
              />
            </a>
            <Carousel.Caption>
              <h5>매거진</h5>
              <h1>MAGAZINE - TITLE</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br /><br />

        {/* 콘텐츠 */}
        <h5 align="center">CONTENTS</h5>
        <hr />
        <Tabs defaultActiveKey="shareboard" id="uncontrolled-tab-example" className="mb-3 justify-content-center">
          <Tab eventKey="shareboard" title="공유게시판">
            <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                  <Card>
                    <a href="#">
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
                    </a>
                    <Card.Body>
                      <Row>
                        <Col>
                          <h6>
                            카테고리&nbsp;|&nbsp;
                            게시글 제목 샘플&nbsp;
                            <Badge bg="primary">
                              47
                            </Badge>&nbsp;
                            <Badge bg="warning">
                              ★
                            </Badge>
                          </h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <lead className="text-muted">
                            21-08-02&nbsp;|&nbsp;
                            1,234&nbsp;|&nbsp;
                            글쓴이샘플
                          </lead>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="event" title="이벤트">
            <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                  <Card>
                    <a href="#">
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
                    </a>
                    <Card.Body>
                      <Row>
                        <Col>
                          <h6>
                            카테고리&nbsp;|&nbsp;
                            게시글 제목 샘플&nbsp;
                            <Badge bg="primary">
                              47
                            </Badge>&nbsp;
                            <Badge bg="warning">
                              ★
                            </Badge>
                          </h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <lead className="text-muted">
                            21-08-02&nbsp;|&nbsp;
                            1,234&nbsp;|&nbsp;
                            글쓴이샘플
                          </lead>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="magazine" title="매거진">
            <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                  <Card>
                    <a href="#">
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
                    </a>
                    <Card.Body>
                      <Row>
                        <Col>
                          <h6>
                            카테고리&nbsp;|&nbsp;
                            게시글 제목 샘플&nbsp;
                            <Badge bg="primary">
                              47
                            </Badge>&nbsp;
                            <Badge bg="warning">
                              ★
                            </Badge>
                          </h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <lead className="text-muted">
                            21-08-02&nbsp;|&nbsp;
                            1,234&nbsp;|&nbsp;
                            글쓴이샘플
                          </lead>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default MainCommonComponent;