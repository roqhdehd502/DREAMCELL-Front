import React, { useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";

import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Form,
  Row,
  Col,
  ProgressBar,
  ListGroup,
  CloseButton,
} from 'react-bootstrap';
import {
  Clock,
  HeartFill,
  ListUl,
  Pencil,
  Trash,
  ShareFill,
  CheckLg,
  XLg,
  FlagFill,
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
          최종목표 수정
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>카테고리 및 최종목표</Form.Label>
          <InputGroup className="mb-3">
            <Col md={3}>
              <Form.Select>
                <option>공부</option>
                <option value="1">운동</option>
                <option value="2">기타</option>
              </Form.Select>
            </Col>
            <Col md={9}>
              <FormControl type="text" value="셀 최종목표 샘플" placeholder="최종목표를 입력해주세요" />
            </Col>
          </InputGroup>
          <br />
          <Form.Group className="position-relative mb-3">
            <Form.Label>썸네일 이미지</Form.Label>
            <Form.Control
              type="file"
              name="file"
            />
            <Form.Control.Feedback type="invalid" tooltip>
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              최근에 등록된 순서대로 썸네일이 반영됩니다
            </Form.Text>
          </Form.Group>
          <img width="80" height="100" src="https://images.unsplash.com/photo-1628533460851-20236fc62150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" />
          <CloseButton />
          <Row>
            <Col align="right">
              <Button variant="info" type="submit">
                <Pencil />&nbsp;셀수정
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const CellDetail = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h3>DREAM CELL</h3>
      <br />

      {/* 게시글 정보 및 최종목표 수정 */}
      <Row>
        <Col align="left">
          <h5>카테고리&nbsp;|&nbsp;셀 최종목표 샘플&nbsp;</h5>
        </Col>
        <Col align="right">
          <Button variant="info" type="button" onClick={() => setModalShow(true)}>
            <Pencil />&nbsp;목표수정
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
      <hr />

      {/* 게시글 일자 */}
      <Row bg="primary">
        <Col align="left">
          <Clock></Clock>&nbsp;1970.01.01
        </Col>
      </Row>
      <hr />

      {/* 진행도 */}
      <Row>
        <Col>
          <ProgressBar animated now={33} label={`${33}%`} />
        </Col>
      </Row>
      <br />

      {/* 중간목표 내용 */}
      <Row>
        <Col>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              중목표 샘플1
            </ListGroup.Item>
            <ListGroup.Item as="li">
              중목표 샘플2&nbsp;
              <Button variant="info" size="sm"><CheckLg />&nbsp;달성</Button>&nbsp;
              <Button variant="danger" size="sm"><XLg />&nbsp;취소</Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              중목표 샘플3&nbsp;
              <Button variant="info" size="sm"><CheckLg />&nbsp;달성</Button>&nbsp;
              <Button variant="danger" size="sm"><XLg />&nbsp;취소</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />

      {/* 달성버튼 */}
      <Row>
        <Col align="center">
          <Button variant="info" type="button">
            <FlagFill />&nbsp;목표달성!
          </Button>
        </Col>
      </Row>
      <hr />

      {/* 목록, 공유, 즐겨찾기, 삭제 */}
      <Row>
        <Col align="left">
          <Button variant="primary" type="button" href="/cell">
            <ListUl />&nbsp;목록
          </Button>&nbsp;
          <Button variant="info" type="button">
            <ShareFill />&nbsp;공유
          </Button>
        </Col>
        <Col align="right">
          <Button variant="warning" type="button">
            <HeartFill />&nbsp;즐겨찾기
          </Button>&nbsp;
          <Button variant="danger" type="button">
            <Trash />&nbsp;삭제
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CellDetail;