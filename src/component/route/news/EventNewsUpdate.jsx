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


const EventNewsUpdate = () => {
  return (
    <div>
      <h3>이벤트</h3>
      <br />

      <Form>
        <InputGroup className="mb-3">
          <Col>
            <FormControl placeholder="제목" />
          </Col>
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="내용을 작성해주세요" rows={10} />
        </Form.Group>
        <Form.Group className="position-relative mb-3">
          <Form.Label>썸네일 이미지</Form.Label>
          <Form.Control
            type="file"
            name="file"
          />
          <Form.Control.Feedback type="invalid" tooltip>
          </Form.Control.Feedback>
        </Form.Group>
        <br />

        <Row>
          <Col align="left">
            <Button variant="primary" type="button">
              <ListUl />&nbsp;목록
            </Button>
          </Col>
          <Col align="right">
            <Button variant="info" type="submit">
              <Pencil />&nbsp;글쓰기
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default EventNewsUpdate;