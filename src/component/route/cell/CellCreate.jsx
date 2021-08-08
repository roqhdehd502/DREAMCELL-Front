import React, { useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";

import {
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import {
  ListUl,
  Pencil,
} from 'react-bootstrap-icons';


const CellCreate = () => {

  return (
    <div>
      <h3>DREAM CELL</h3>
      <br />

      <Form>
        {/* 카테고리 및 최종목표 입력 */}
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
            <FormControl type="text" placeholder="최종목표를 입력해주세요" />
          </Col>
        </InputGroup>
        <br />

        {/* 중간목표 입력 */}
        <Row>
          <Col align="left">
            <Form.Label>중간목표</Form.Label>
          </Col>
          <Col align="right">
            <Button type="button" variant="dark">
              <b>+</b>&nbsp;추가
            </Button>
          </Col>
        </Row>
        <InputGroup className="mb-3">
          <Col>
            <FormControl type="text" placeholder="중간목표를 입력해주세요" />
          </Col>
        </InputGroup>
       
        <br />

        {/* 썸네일 입력 */}
        <Form.Group className="position-relative mb-3">
          <Form.Label>썸네일 이미지</Form.Label>
          <Form.Control
            type="file"
            name="file"
          />
          <Form.Control.Feedback type="invalid" tooltip>
          </Form.Control.Feedback>
        </Form.Group>

        {/* 목록 되돌아가기 및 셀 작성 */}
        <Row>
          <Col align="left">
            <Button variant="primary" type="button">
              <ListUl />&nbsp;목록
            </Button>
          </Col>
          <Col align="right">
            <Button variant="info" type="submit">
              <Pencil />&nbsp;셀작성
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default CellCreate;