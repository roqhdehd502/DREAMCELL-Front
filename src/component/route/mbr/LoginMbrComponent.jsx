import React, { useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";

import { 
  Form, 
  Button,
} from 'react-bootstrap';

const regist = () => {
  window.location.href = "/regist"
}

const LoginMbrComponent = () => {
  return (
    <div>
      <h3 align="center">로그인</h3>
      <hr />
      <br />
      
      <Form>
        <Form.Group className="mb-3" controlId="mbr_id">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mbr_pw">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="auto_login">
          <Form.Check type="checkbox" label="자동로그인" />
        </Form.Group>
        <Button variant="info" type="submit">
          로그인
        </Button>&nbsp;
        <Button variant="info" type="button" onClick={regist}>
          회원가입
        </Button>
      </Form>
    </div>
  );
}

export default LoginMbrComponent;