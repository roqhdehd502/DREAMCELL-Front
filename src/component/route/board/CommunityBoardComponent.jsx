import React, { useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";

import {
  Button,
  Table,
  Pagination,
  Modal,
  InputGroup,
  FormControl,
  Form,
  Row,
  Col,
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
                <option value="3">글쓴이</option>
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

const CommunityBoardComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h3>자유게시판</h3>
      <br />

      <Row>
        <Col align="left">
          <Button variant="light">
            전체
          </Button>
          &nbsp;
          <Button variant="light">
            공지사항
          </Button>
          &nbsp;
          <Button variant="light">
            일반
          </Button>
          &nbsp;
          <Button variant="light">
            후기
          </Button>
        </Col>
        <Col align="right">
          <Button variant="info">
            <Pencil />&nbsp;글쓰기
          </Button>
        </Col>
      </Row>
      <br />

      <Table striped bordered hover>
        <thead align="center">
          <tr>
            <th>카테고리</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">공지사항</td>
            {/* <td onClick={() => this.editUser(user.id)}></td> */}
            <td>
              드림셀과 관련된 내용을 올려주시기 바랍니다&nbsp;
              <Badge bg="primary">
                47
              </Badge>&nbsp;
              <Badge bg="warning">
                ★
              </Badge>
            </td>
            <td align="center">관리자</td>
            <td align="center">2021-07-24</td>
          </tr>
          <tr>
            <td align="center">일반</td>
            <td>
              올만에 오니 좋네요&nbsp;
              <Badge bg="primary">
                1
              </Badge>&nbsp;
            </td>
            <td align="center">Mark</td>
            <td align="center">2021-07-24</td>
          </tr>
          <tr>
            <td align="center">후기</td>
            <td>
              플래너를 실천한 후기...&nbsp;
              <Badge bg="primary">
                22
              </Badge>&nbsp;
              <Badge bg="warning">
                ★
              </Badge>
            </td>
            <td align="center">Jacobs</td>
            <td align="center">2021-07-24</td>
          </tr>
        </tbody>
      </Table>

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

export default CommunityBoardComponent;