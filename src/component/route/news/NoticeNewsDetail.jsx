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
} from 'react-bootstrap';
import {
  Search,
  Clock,
  ChatLeftDotsFill,
  HeartFill,
  Eye,
  HandThumbsUpFill,
  ListUl,
  BellSlash,
  Pencil,
  Trash,
  ChatLeftDots,
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

const NoticeNewsDetail = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h3>공지사항</h3>
      <br />

      {/* 게시글 정보 */}
      <Row>
        <Col>
          <h5>카테고리&nbsp;|&nbsp;게시글제목샘플</h5>
          <b>글쓴이샘플</b>
        </Col>
      </Row>
      <hr />

      {/* 게시글 일자 및 댓글, 조회수, 추천 */}
      <Row bg="primary">
        <Col align="left">
          <Clock></Clock>&nbsp;1970.01.01
        </Col>
        <Col align="right">
          <ChatLeftDotsFill></ChatLeftDotsFill>&nbsp;10&nbsp;&nbsp;
          <HeartFill></HeartFill>&nbsp;10&nbsp;&nbsp;
          <Eye></Eye>&nbsp;10
        </Col>
      </Row>
      <hr />

      {/* 글내용 */}
      <Row>
        <Col>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Col>
      </Row>
      <br />

      {/* 추천버튼 */}
      <Row>
        <Col align="center">
          <Button variant="warning" type="button">
            <HandThumbsUpFill></HandThumbsUpFill>&nbsp;
            추천&nbsp;
            10
          </Button>
        </Col>
      </Row>
      <hr />

      {/* 목록 및 신고 */}
      <Row>
        <Col align="left">
          <Button variant="primary" type="button">
            <ListUl />&nbsp;목록
          </Button>&nbsp;
          <Button variant="danger" type="button">
            <BellSlash />&nbsp;신고
          </Button>
        </Col>
        <Col align="right">
          <Button variant="info" type="button">
            <Pencil />&nbsp;수정
          </Button>&nbsp;
          <Button variant="danger" type="button">
            <Trash />&nbsp;삭제
          </Button>
        </Col>
      </Row>
      <hr />

      {/* 댓글목록 */}
      <Row>
        <Col align="left">
          <ChatLeftDots />&nbsp;댓글 10개
        </Col>
      </Row>
      <hr />
      <Row>
        <Col align="left">
          <b>댓글작성자샘플</b>&nbsp;
          2021-08-06
        </Col>
        <Col align="right">
          <Button variant="warning" size="sm" type="button">
            <HandThumbsUpFill></HandThumbsUpFill>&nbsp;
            10
          </Button>&nbsp;
          <Button variant="info" size="sm" type="button">
            대댓글
          </Button>&nbsp;
          <Button variant="danger" size="sm" type="button">
            신고
          </Button>&nbsp;
          <Button variant="info" size="sm" type="button">
            수정
          </Button>&nbsp;
          <Button variant="danger" size="sm" type="button">
            삭제
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Col>
      </Row>
      <hr />

      {/* 댓글작성 */}
      <Form>
        <Row>
          <Form.Control as="textarea" placeholder="댓글을 작성해주세요" />
        </Row>
        <br />
        <Row>
          <Col align="right">
            <Button variant="info" type="submit">
              <Pencil />&nbsp;댓글쓰기
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />

      {/* 글목록 */}
      <Row>
        <Col align="left">
          <Button variant="light">
            전체
          </Button>
          &nbsp;
          <Button variant="light">
            일반
          </Button>
          &nbsp;
          <Button variant="light">
            안내
          </Button>
          &nbsp;
          <Button variant="light">
            긴급
          </Button>
        </Col>
      </Row>
      <br />

      <Table striped bordered hover>
        <thead align="center">
          <tr>
            <th>카테고리</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">긴급</td>
            {/* <td onClick={() => this.editUser(user.id)}></td> */}
            <td>공지사항 제목-3</td>
            <td align="center">2021-07-24</td>
          </tr>
          <tr>
            <td align="center">일반</td>
            <td>공지사항 제목-2</td>
            <td align="center">2021-07-24</td>
          </tr>
          <tr>
            <td align="center">안내</td>
            <td>공지사항 제목-1</td>
            <td align="center">2021-07-24</td>
          </tr>
        </tbody>
      </Table>

      <Row>
        <Col align="left">
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

export default NoticeNewsDetail;