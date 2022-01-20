import React, { Component, File, ChangeEvent, HTMLInputElement } from 'react';

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
      uploadfiles: null,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  fileChange = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  }

  createCell = (e) => {
    e.preventDefault();

    const cell = new FormData();

    if (this.state.cell_name === null) {
      alert("최종목표를 입력해주세요!");
      return false;
    } else {
      cell.append("cell_name", this.state.cell_name);
    }

    if (AuthenticationService.getLoggedInUserName() === null) {
      alert("로그인 페이지로 이동합니다");
      return false;
    } else {
      cell.append("mbr_id", AuthenticationService.getLoggedInUserName());
    }

    if (this.state.cell_type_number === null) {
      alert("카테고리를 선택해주세요!");
      return false;
    } else {
      cell.append("cell_type_number", this.state.cell_type_number);
    }

    if (e.target.files === null) {
      alert("썸네일을 등록해주세요!");
      return false;
    } else {
      cell.append("uploadfiles", this.state.uploadfiles);
    }

    console.log("cell_name: " + this.state.cell_name);
    console.log("mbr_id: " + AuthenticationService.getLoggedInUserName());
    console.log("cell_type_number: " + this.state.cell_type_number);
    console.log("uploadfiles: " + this.state.uploadfiles);

    CellService.createCell(cell)
      .then(res => {
        console.log(res + 'createCell() 성공');
        this.props.history.push('/cell');
      })
      .catch(err => {
        console.log('createCell() 에러', err);
        alert('작성오류로 인해 새로고침 합니다')
        this.props.history.push('/cell/create');
      });
  }

  render() {
    return (
      <div>
        <h3>DREAM CELL</h3>
        <br />

        <Form enctype="multipart/form-data">
          {/* 카테고리 및 최종목표 입력 */}
          <Form.Label>카테고리 및 최종목표</Form.Label>
          <InputGroup className="mb-3">
            <Col md={3}>
              <Form.Select name="cell_type_number" value={this.state.cell_type_number} onChange={this.onChange}>
                <option value="1">공부</option>
                <option value="2">운동</option>
                <option value="3">기타</option>
              </Form.Select>
            </Col>
            <Col md={9}>
              <FormControl type="text" name="cell_name" value={this.state.cell_name} placeholder="최종목표를 입력해주세요" onChange={this.onChange} />
            </Col>
          </InputGroup>
          <br />

          {/* 썸네일 입력 */}
          <div className="mb-3">
            <label className="form-label">썸네일 이미지</label>
            <input type="file" className="form-control" name="uploadfiles" value={this.state.uploadfiles} accept=".jpg, .png" onChange={this.fileChange} />
          </div>
          {/* 
          <Form.Group className="position-relative mb-3">
            <Form.Label>썸네일 이미지</Form.Label>
            <Form.Control type="file" name="uploadfiles" value={this.state.uploadfiles} accept=".jpg, .png" onChange={this.fileChange} />
            <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
          </Form.Group>
           */}
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