import React, { Component } from 'react';

import AuthenticationService from '../../../AuthenticationService'
import CellService from '../../../CellService'
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


class CellCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cell_name: '',
      mbr_id: '',
      cell_type_number: '',
      cell_thumbnail: '',
    }
  }

  createCell = (e) => {
    e.preventDefault();
    let cell = {
      cell_name: this.state.cell_name,
      mbr_id: AuthenticationService.getLoggedInUserName(),
      cell_type_number: this.state.cell_type_number,
      cell_thumbnail: this.state.cell_thumbnail,
    }
    console.log(cell);

    if (cell.cell_name == "") {
      alert("목표를 입력하세요!");
    } else {
      CellService.createCell(cell)
        .then(res => {
          console.log(res + 'createCell() 성공');
          this.props.history.push('/cell');
        })
        .catch(err => {
          console.log('createCell() 에러', err);
          alert('작성오류로 인해 목록 페이지로 이동합니다')
          this.props.history.push('/cell');
        });
    }
  }

  render() {
    return (
      <div>
        <h3>DREAM CELL</h3>
        <br />

        <Form>
          {/* 카테고리 및 최종목표 입력 */}
          <Form.Label>카테고리 및 최종목표</Form.Label>
          <InputGroup className="mb-3">
            <Col md={3}>
              <Form.Select name="cell_type_number" value={this.state.cell_type_number}>
                <option value="1">공부</option>
                <option value="2">운동</option>
                <option value="3">기타</option>
              </Form.Select>
            </Col>
            <Col md={9}>
              <FormControl type="text" name="cell_name" value={this.state.cell_name} placeholder="최종목표를 입력해주세요" />
            </Col>
          </InputGroup>
          <br />

          {/* 썸네일 입력 */}
          <Form.Group className="position-relative mb-3">
            <Form.Label>썸네일 이미지</Form.Label>
            <Form.Control type="file" name="cell_thumbnail" value={this.state.cell_thumbnail} accept=".jpg, .png" />
            <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
          </Form.Group>
          <div className="form-text">
            JPG 및 PNG 파일만 지원하고 가로가 더 긴 사진을 추천합니다.
          </div>
          <br />

          {/* 목록 되돌아가기 및 셀 작성 */}
          <Row>
            <Col align="left">
              <Button variant="primary" type="button" href="/cell">
                <ListUl />&nbsp;목록
              </Button>
            </Col>
            <Col align="right">
              <Button variant="info" type="button" onClick={this.createCell}>
                <Pencil />&nbsp;셀작성
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default CellCreate;