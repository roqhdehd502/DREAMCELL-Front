import React, { useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";

import {
  Button,
  Modal,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Pagination,
  Card,
  Badge,
} from 'react-bootstrap';
import {
  Search,
  Pencil,
  StarFill,
} from 'react-bootstrap-icons';


// 모달
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          검색
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup className="mb-3">
            <Col md={3}>
              <Form.Select aria-label="Default select example">
                <option>제목</option>
                <option value="1">내용</option>
                <option value="2">제목+내용</option>
              </Form.Select>
            </Col>
            <Col md={7}>
              <FormControl aria-label="Text input with dropdown button" />
            </Col>
            <Col md={2}>
              <Button type="button" variant="success">
                <span className="material-icons">
                  search
                </span>
              </Button>
            </Col>
          </InputGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const MagazineNewsComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h3>매거진</h3>
      <br />

      <Row>
        <Col align="left">
          <Button variant="light">
            전체
          </Button>
          &nbsp;
          <Button variant="light">
            인터뷰
          </Button>
          &nbsp;
          <Button variant="light">
            프로모션
          </Button>
          &nbsp;
          <Button variant="light">
            기타
          </Button>
        </Col>
        <Col align="right">
          <Button variant="info">
            <Pencil />&nbsp;글쓰기
          </Button>
        </Col>
      </Row>
      <br />

      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col>
            <Card>
              {/* <td onClick={() => this.editUser(user.id)}></td> */}
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
      <br />

      <Row>
        <Col align="left">
          <Button variant="warning">
            <StarFill />&nbsp;인기글
          </Button>
          &nbsp;
          <Button variant="success" onClick={() => setModalShow(true)}>
            <Search />&nbsp;검색
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
      <br />

      <Pagination className="justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

    </div>
  );
}

export default MagazineNewsComponent;