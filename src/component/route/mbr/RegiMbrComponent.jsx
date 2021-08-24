import React, { Component } from 'react';

import "../../../App.css";
import AuthenticationService from '../../../AuthenticationService'

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

      message: null,
    }
  }

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
              {/* <button type="button" className="btn btn-success"><Search />&nbsp;중복체크</button> */}
            </div>
            <div className="form-text">
              영문 + 숫자 조합 5~11자로 입력해주세요
            </div>
          </div><br />

          {/* 비밀번호 */}
          <div className="form-group row">
            <label className="form-label">비밀번호</label>
            <div className="input-group mb-3">
              <input type="password" className="form-control" name="mbr_pw" value={this.state.mbr_pw} onChange={this.onChange} maxlength="16" required />
            </div>
            <div className="form-text">
              영문 + 숫자 + 특수문자 조합 8~16자로 입력해주세요
            </div>
          </div><br />

          {/* 중복성 체크할 것! */}
          {/* 비밀번호 확인 
          <div className="form-group row">
            <label className="form-label">비밀번호 확인</label>
            <div className="input-group mb-3">
              <input type="password" className="form-control" name="pw_c" value={passwordCheck} maxlength="16" required onChange={onChangePasswordChk} />
              {passwordError && <div style={{ color: 'red' }}><br />비밀번호가 일치하지 않습니다</div>}
            </div>
          </div> */}

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
          
          {/* 중복성 체크할 것! */}
          {/* 닉네임 */}
          <div className="form-group row">
            <label className="form-label">닉네임</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="mbr_nickname" value={this.state.mbr_nickname} onChange={this.onChange} required />
              {/* <button type="button" className="btn btn-success"><Search />&nbsp;중복체크</button> */}
            </div>
            <div className="form-text">
              욕설 및 비속어, 모욕, 특정단체 등을 암시하는 닉네임 입력시 경고없이 계정이 삭제되니 유의하세요.
            </div>
          </div><br />

          {/* 이메일 */}
          <div className="form-group row">
            <label className="form-label">이메일</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="mbr_email" value={this.state.mbr_email} onChange={this.onChange} placeholder="abcd1234@email.com" required />
            </div>
          </div><br />

          {/* 연락처 */}
          <div className="form-group row">
            <label className="form-label">연락처</label>
            <div className="input-group mb-3">
              <input type="number" className="form-control" name="contact_number" value={this.state.contact_number} onChange={this.onChange}  placeholder="01012345678" required />
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
            {/* 임시코드 선택메뉴로 설정되게 할 것! */}
            <input type="text" className="form-control" name="mbr_gender" value={this.state.mbr_gender} onChange={this.onChange} placeholder="남 (or) 여 (or) 논바이너리" required />
              {/* <div className="col-sm-3">
                <input type="radio" className="form-check-input" name="mbr_gender" value="M" onChange={this.onChange} required />&nbsp;남자
              </div>
              <div className="col-sm-3">
                <input type="radio" className="form-check-input" name="mbr_gender" value="F" onChange={this.onChange} required />&nbsp;여자
              </div>
              <div className="col-sm-3">
                <input type="radio" className="form-check-input" name="mbr_gender" value="N" onChange={this.onChange} required />&nbsp;논바이너리
              </div> */}
            </div>
          </div><br />

          {/* 이용약관 */}
          {/* 체크안하면 가입방지 할 것! */}
          <div className="form-group row">
            <label className="form-label">성별</label>
            <div className="input-group mb-3">
              <div className="col-sm-10" align="left">
                <input type="radio" className="form-check-input" name="term" />&nbsp;개인정보 수집 이용동의 (필수)
              </div>
              <div className="col-sm-2" align="right">
                <button type="button" className="btn btn-primary btn-sm">약관</button>
              </div>
            </div>
            {/* {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>} */}
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