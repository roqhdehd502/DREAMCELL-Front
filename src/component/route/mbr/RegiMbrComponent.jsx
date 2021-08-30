import React, { Component } from 'react';

import AuthenticationService from '../../../AuthenticationService'
import "../../../App.css";

import {
  Search,
} from 'react-bootstrap-icons';


class RegiMbrComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mbr_id: '',
      mbr_pw: '',
      mbr_name: '',
      mbr_nickname: '',
      mbr_email: '',
      contact_number: '',
      mbr_birth: '',
      mbr_gender: '',

      id_check: '',
      nick_check: '',
      pw_confirm: '',
      pw_check: '',
      term: false,
      message: null,
    }
  }

  // ID 중복 확인
  isExistIdCheck = async (e) => {
    e.preventDefault();

    console.log("check this: " + this.state.mbr_id);

    AuthenticationService.isExistId(this.state.mbr_id)
      .then(res => {
        console.log('isExistId() 성공');
        if (res.data == 0) {
          this.setState({
            id_check: '✅ 사용하실 수 있는 ID입니다',
          });
        } else {
          this.setState({
            id_check: '❌ 이미 사용 중인 ID입니다',
          });
        }
      })
      .catch(err => {
        console.log('isExistId() 에러', err);
        alert('인증에러로 인해 페이지를 새로고침 합니다');
      });
  };

  // PW 확인
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    setTimeout(this.handleCheck, 100);
  };

  handleCheck = () => {
    const { mbr_pw, pw_confirm } = this.state;
    // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
    if (mbr_pw.length < 1 || pw_confirm.length < 1) {
      this.setState({
        pw_check: '패스워드를 입력해주세요',
      });
      // 비밀번호가 같다면 일치
    } else if (mbr_pw === pw_confirm) {
      this.setState({
        pw_check: '✅ 패스워드가 일치합니다',
      });
      // 비밀번호가 같지 않다면 불일치
    } else {
      this.setState({
        pw_check: '❌ 패스워드가 불일치합니다',
      });
    }
  };

  // 닉네임 중복 확인
  isExistNickCheck = async (e) => {
    e.preventDefault();

    console.log("check this: " + this.state.mbr_nickname);

    AuthenticationService.isExistNick(this.state.mbr_nickname)
      .then(res => {
        console.log('isExistNick() 성공');
        if (res.data == 0) {
          this.setState({
            nick_check: '✅ 사용하실 수 있는 닉네임입니다',
          });
        } else {
          this.setState({
            nick_check: '❌ 이미 사용 중인 닉네임입니다',
          });
        }
      })
      .catch(err => {
        console.log('isExistNick() 에러', err);
        alert('인증에러로 인해 페이지를 새로고침 합니다');
        this.props.history.push('/regist');
      });
  };

  // 체크사항 확인
  checkChange = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  // 입력사항 확인
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveMbr = (e) => {
    e.preventDefault();
    let mbr = {
      mbr_id: this.state.mbr_id,
      mbr_pw: this.state.mbr_pw,
      mbr_name: this.state.mbr_name,
      mbr_nickname: this.state.mbr_nickname,
      mbr_email: this.state.mbr_email,
      contact_number: this.state.contact_number,
      mbr_birth: this.state.mbr_birth,
      mbr_gender: this.state.mbr_gender,
    }
    console.log(mbr);

    /* 아이디 조건 수정하기 */
    // if (mbr.mbr_id == "" || mbr.mbr_id != /^[A-za-z]{5,11}/g) {
    if (mbr.mbr_id == "") {
      // } else if (mbr.mbr_pw == ""
      //   || (/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/ || /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}$/ || /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/)) {
      alert("올바른 ID를 입력해주세요!");
    } else if (mbr.mbr_pw == "") {
      alert("올바른 비밀번호를 입력해주세요!");
    } else if (mbr.mbr_name == "") {
      alert("이름을 입력해주세요!");
    } else if (mbr.mbr_nickname == "") {
      alert("닉네임을 입력해주세요!");
    } else if (mbr.mbr_email == "") {
      alert("이메일을 입력해주세요!");
    } else if (mbr.contact_number == "") {
      alert("연락처를 입력해주세요!");
    } else if (mbr.mbr_birth == "") {
      alert("생년월일을 입력해주세요!");
    } else if (this.state.checked == false) {
      alert("약관 동의 후 다시 진행바랍니다");
    } else {
      AuthenticationService.addMbr(mbr)
        .then(res => {
          this.setState({
            message: mbr.mbr_id + '님 환영합니다!'
          })
          console.log(this.state.message);
          this.props.history.push('/main');
        })
        .catch(err => {
          console.log('addMbr() 에러', err);
        });

    }
  }

  render() {
    return (
      <div>
        <h3 align="center">회원가입</h3>
        <hr /><br />

        <form>
          {/* 중복성 체크할 것! */}
          {/* 아이디 */}
          <div className="form-group row">
            <label className="form-label">아이디</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="mbr_id" value={this.state.mbr_id} onChange={this.onChange} maxlength="20" required />
              <button type="button" className="btn btn-success" onClick={this.isExistIdCheck}><Search />&nbsp;중복체크</button>
            </div>
            <div className="form-text">
              영문 + 숫자 조합 5~11자로 입력해주세요<br />
              {this.state.id_check}
            </div>
          </div><br />

          {/* 비밀번호 */}
          <div className="form-group row">
            <label className="form-label">비밀번호</label>
            <div className="input-group mb-3">
              <input type="password" className="form-control" name="mbr_pw" value={this.state.mbr_pw} onChange={this.onChange, this.handleChange} maxlength="16" required />
            </div>
            <div className="form-text">
              영문 + 숫자 + 특수문자 조합 8~16자로 입력해주세요
            </div>
          </div><br />

          {/* 비밀번호 확인 */}
          <div className="form-group row">
            <label className="form-label">비밀번호 확인</label>
            <div className="input-group mb-3">
              <input type="password" className="form-control" name="pw_confirm" value={this.state.pw_confirm} onChange={this.handleChange} maxlength="16" required />
            </div>
            <div className="form-text">
              {this.state.pw_check}
            </div>
          </div><br />

          {/* 이름 */}
          <div className="form-group row">
            <label className="form-label">이름</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="mbr_name" value={this.state.mbr_name} onChange={this.onChange} required />
            </div>
            <div className="form-text">
              실명을 입력해주세요
            </div>
          </div><br />

          {/* 닉네임 */}
          <div className="form-group row">
            <label className="form-label">닉네임</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="mbr_nickname" value={this.state.mbr_nickname} onChange={this.onChange} required />
              <button type="button" className="btn btn-success" onClick={this.isExistNickCheck}><Search />&nbsp;중복체크</button>
            </div>
            <div className="form-text">
              욕설 및 비속어, 모욕, 특정단체 등을 암시하는 닉네임 입력시 경고없이 계정이 삭제되니 유의하세요.<br />
              {this.state.nick_check}
            </div>
          </div><br />

          {/* 이메일 */}
          <div className="form-group row">
            <label className="form-label">이메일</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="mbr_email" value={this.state.mbr_email} onChange={this.onChange} placeholder="abcd1234@email.com" required />
            </div>
          </div><br />

          {/* 추후 인증 API 구현할 것 */}
          {/* 연락처 */}
          <div className="form-group row">
            <label className="form-label">연락처</label>
            <div className="input-group mb-3">
              <input type="number" className="form-control" name="contact_number" value={this.state.contact_number} onChange={this.onChange} placeholder="01012345678" required />
            </div>
          </div><br />

          {/* 생년월일 */}
          <div className="form-group row">
            <label className="form-label">생년월일</label>
            <div className="input-group mb-3">
              <input type="date" className="form-control" name="mbr_birth" value={this.state.mbr_birth} onChange={this.onChange} placeholder="01012345678" required />
            </div>
          </div><br />

          {/* 성별 */}
          <div className="form-group row">
            <label className="form-label">성별</label>
            <div className="input-group mb-3">
              <select className="form-select form-select-lg mb-3" name="mbr_gender" value={this.state.mbr_gender} onChange={this.onChange} required >
                <option value="M">남자</option>
                <option value="F">여자</option>
                <option value="N">논바이너리</option>
              </select>
            </div>
          </div><br />

          {/* 이용약관 */}
          <div className="form-group row">
            <label className="form-label">이용약관</label>
            <div className="input-group mb-3">
              <div className="col-sm-10" align="left">
                <input type="checkbox" className="form-check-input" name="term" checked={this.state.checked} onChange={this.checkChange} />&nbsp;개인정보 수집 이용동의 (필수)
              </div>
              <div className="col-sm-2" align="right">
                <button type="button" className="btn btn-primary btn-sm">약관</button>
              </div>
            </div>
          </div><br />

          {/* 회원가입 버튼 */}
          <div className="form-group row">
            <button type="button" className="btn btn-info" onClick={this.saveMbr}>회원가입</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegiMbrComponent;