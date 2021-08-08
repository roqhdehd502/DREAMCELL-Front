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


const NoticeNewsCreate = () => {
  return (
    <div>
      <h3>공지사항</h3>
      <br />

      <Form>
        <InputGroup className="mb-3">
          <Col md={3}>
            <Form.Select>
              <option>일반</option>
              <option value="1">안내</option>
              <option value="2">긴급</option>
            </Form.Select>
          </Col>
          <Col md={9}>
            <FormControl placeholder="제목" />
          </Col>
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="내용을 작성해주세요" rows={10} />
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

export default NoticeNewsCreate;