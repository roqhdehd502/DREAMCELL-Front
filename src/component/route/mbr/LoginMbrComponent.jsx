import React, { Component, useState, useEffect } from 'react';

//import ApiService from "../../../ApiService";
import AuthenticationService from '../../../AuthenticationService'

import "../../../App.css";

import {
  Button,
  
} from 'react-bootstrap';


class LoginMbrComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: localStorage.getItem("authenticatedUser") || '',
      password: '',
      token: localStorage.getItem("token") || '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]
          : event.target.value
      }
    )
  }

  // username, response.data.token 을 사용해 사용자 확인
  // 로그인 성공하면 메인페이지로 이동
  loginClicked() {
    AuthenticationService
      .executeJwtAuthenticationService(this.state.username, this.state.password)
      .then((response) => {
        console.log(response)
        this.setState({
          token: response.data.token
        });
        AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, this.state.token)
        this.props.history.push(`/main`)
        //this.props.history.push(`/welcome/${this.state.username}`)
      }).catch(() => {
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
      })
  }

  render() {
    return (
      <div>
        <h3 align="center">로그인</h3>
        <hr /><br />

        <div className="row">
          {this.state.hasLoginFailed && <div className="alert alert-warning">로그인에 실패하였습니다.</div>}
          {this.state.showSuccessMessage && <div className="alert alert-success">로그인 성공!</div>}
        </div>

        <div className="row">
          <div className="mb-3">
            <label for="Input1" className="form-label">아이디</label>
            <input type="text" name="username" className="form-control" id="Input1" value={this.state.username} onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label for="Input2" className="form-label">패스워드</label>
            <input type="password" name="password" className="form-control" id="Input2" value={this.state.password} onChange={this.handleChange}></input>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col">
            <input className="form-check-input" type="checkbox" value="" />&nbsp;자동로그인
          </div>
        </div>
        <br />
             
        <div className="row">
          <div className="col" align="center">
            <Button type="button" variant="info" onClick={this.loginClicked}>로그인</Button>&nbsp;
            <Button type="button" variant="info" href="/regist">회원가입</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginMbrComponent;