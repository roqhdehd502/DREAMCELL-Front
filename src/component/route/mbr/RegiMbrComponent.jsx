import React, { useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";
import AuthenticationService from '../../../AuthenticationService'

import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';

const RegiMbrComponent = () => {
  return (
    <div>
      <h3 align="center">회원가입</h3>
      <hr/ >
      <br />

      <Form>
        <Form.Group className="mb-3" controlId="mbr_id">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" />
          <Form.Text id="passwordHelpBlock" muted>
            영문 + 숫자 조합 5~11자로 입력해주세요
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mbr_pw">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" />
          <Form.Text id="passwordHelpBlock" muted>
            영문 + 숫자 + 특수문자 조합 8~16자로 입력해주세요
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control type="password" />
          <Form.Text id="passwordHelpBlock" muted>
            입력하신 비밀번호를 동일하게 입력해주세요
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mbr_nickname">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="올바른 명칭으로 입력해주세요" />
          <Form.Text id="passwordHelpBlock" muted>
            욕설 및 비속어, 모욕, 특정단체 등을 암시하는 닉네임 입력시 경고없이 계정이 삭제되니 유의하세요.
          </Form.Text>
        </Form.Group>

        <Form.Label>이메일</Form.Label>
        <InputGroup className="mb-3">
          <Col md={3}>
            <Form.Control type="text" />
          </Col>
          <Col md={9}>
            <Form.Select aria-label="Default select example">
              <option>@naver.com</option>
              <option value="1">@gmail.com</option>
              <option value="2">@hanmail.net</option>
              <option value="3">@nate.com</option>
            </Form.Select>
          </Col>
        </InputGroup>

        <Form.Group className="mb-3" controlId="mbr_name">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="실명을 입력해주세요" />
        </Form.Group>

        <Form.Label>연락처</Form.Label>
        <InputGroup className="mb-3">
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>010</option>
              <option value="1">011</option>
              <option value="2">017</option>
              <option value="3">070</option>
            </Form.Select>
          </Col>
          <Col md={9}>
            <FormControl type="number" placeholder="12345678" />
          </Col>
        </InputGroup>

        <Form.Group className="mb-3" controlId="mbr_birth">
          <Form.Label>생년월일</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mbr_gender">
          <Form.Label>성별</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="남자"
                name="M"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="여자"
                name="F"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="논바이너리"
                name="N"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form.Group>
        <br />

        <Row className="justify-content-center">
          {/* onClick={mbrSave} */}
          <Button variant="info" type="submit">
            회원가입
          </Button>
        </Row>

      </Form>
    </div>
  );
}

export default RegiMbrComponent;