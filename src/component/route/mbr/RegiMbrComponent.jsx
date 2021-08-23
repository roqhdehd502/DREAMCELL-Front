import React, { useState, useCallback } from 'react';

//import ApiService from "../../../ApiService";
import "../../../App.css";
import AuthenticationService from '../../../AuthenticationService'

import {
  Search,
} from 'react-bootstrap-icons';

import { Form, Input, Checkbox, Button } from 'antd';


const RegiMbrComponent = () => {
  // mbr_id
  const [id, setId] = useState('');
  // mbr_pw
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  // mbr_name
  //const [name, setName] = useState('');
  // mbr_nickname
  const [nick, setNick] = useState('');
  // mbr_email
  //const [email, setEmail] = useState('');
  // contact_number
  //const [phone, setPhone] = useState('');
  // mbr_birth
  //const [birth, setBirth] = useState('');
  // mbr_gender
  //const [gender, setgender] = useState('');

  // submit시 입력사항 확인
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  // submit 함수
  const onSubmit = (e) => {
    e.preventDefault();

    // 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    // 약관 동의를 확인한다.
    if (!term) {
      return setTermError(true);
    }

    // 조건 만족시 전송되는 log값 확인
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };

  // id 입력시 onChange 이벤트
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  // 비밀번호 입력시 onChange 이벤트
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 비밀번호를 입력 할 때마다 비밀번호를 검증
  const onChangePasswordChk = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  // 닉네임 입력시 onChange 이벤트
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };

  // 체크박스 초기화
  const onChangeTerm = (e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }

  // const [inputs, setInputs] = useState({
  //   mbr_id: '',
  //   mbr_pw: '',
  //   mbr_name: '',
  //   mbr_nickname: '',
  //   mbr_email: '',
  //   contact_number: '',
  //   mbr_birth: '',
  //   mbr_gender: '',
  // });

  // const { mbr_id, 
  //   mbr_pw,
  //   mbr_name, 
  //   mbr_nickname, 
  //   mbr_email, 
  //   contact_number, 
  //   mbr_birth, 
  //   mbr_gender,
  //  } = inputs;

  // const onChange = (e) => {
  //   const { valuem, name } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [mbr_id]: value,
  //     [mbr_pw]: value,
  //     [mbr_email]: value,
  //   });
  // };

  // // id 중복 체크
  // const idCheck = () => {
  //   var isID = /^[a-zA-Z0-9-_!]{8,16}$/;
  //   var id = document.getElementById('mbr_id').value;

  //   if (!isID.test(id)) {
  //     alert("아이디 형식을 확인해주세요");
  //     document.getElementById('mbr_id').focus();
  //   } else {
  //     AuthenticationService.idCheck()
  //       .then(res => {
  //         this.setState({
  //           id: res.data
  //         })
  //         console.log("ID Check Success!");
  //       })
  //       .catch(err => {
  //         console.log("ID Check Error!", err);
  //         alert("아이디 체크 에러! 새로고침 후 다시 입력해주세요.");
  //       });
  //   }
  // }

  // // pw 일치 체크
  // const isPwSame = () => {
  //   var mbr_pw = document.getElementById('mbr_pw').value;
  //   var pw_c = document.getElementById('pw_c').value;

  //   if (mbr_pw != "" || pw_c != "") {
  //     if (document.getElementById('mbr_pw').value === document.getElementById('pw_c').value) {
  //       document.getElementById('check').innerHTML = '비밀번호 일치';
  //       document.getElementById('check').style.color = 'blue';
  //     } else {
  //       document.getElementById('check').innerHTML = '비밀번호 불일치';
  //       document.getElementById('check').style.color = 'red';
  //     }
  //   }
  // }

  return (
    <div>
      <h3 align="center">회원가입</h3>
      <hr />
      <br />

      <Form onSubmit={onSubmit}>
        {/* 아이디 */}
        <div className="form-group row">
          <label className="form-label">아이디</label>
          <div className="input-group mb-3">
            <Input type="text" className="form-control" name="mbr_id" value={id} maxlength="20" required onChange={onChangeId} />
            <button type="button" className="btn btn-success"><Search />&nbsp;중복체크</button>
          </div>
          <div className="form-text">
            영문 + 숫자 조합 5~11자로 입력해주세요
          </div>
        </div><br />

        {/* 비밀번호 */}
        <div className="form-group row">
          <label className="form-label">비밀번호</label>
          <div className="input-group mb-3">
            <Input type="password" className="form-control" name="mbr_pw" value={password} maxlength="16" required onChange={onChangePassword} />
          </div>
          <div className="form-text">
            영문 + 숫자 + 특수문자 조합 8~16자로 입력해주세요
          </div>
        </div><br />

        {/* 비밀번호 확인 */}
        <div className="form-group row">
          <label className="form-label">비밀번호 확인</label>
          <div className="input-group mb-3">
          <Input type="password" className="form-control" name="pw_c" value={passwordCheck} maxlength="16" required onChange={onChangePasswordChk} />
            {passwordError && <div style={{ color: 'red' }}><br />비밀번호가 일치하지 않습니다</div>}
          </div>
        </div>

        {/* 이름 */}
        <div className="form-group row">
          <label className="form-label">이름</label>
          <div className="input-group mb-3">
            <Input type="text" className="form-control" />
          </div>
          <div className="form-text">
            실명을 입력해주세요
          </div>
        </div><br />

        {/* 닉네임 */}
        <div className="form-group row">
          <label className="form-label">닉네임</label>
          <div className="input-group mb-3">
            <Input type="text" className="form-control" name="user-nick" value={nick} required onChange={onChangeNick} />
            <button type="button" className="btn btn-success"><Search />&nbsp;중복체크</button>
          </div>
          <div className="form-text">
            욕설 및 비속어, 모욕, 특정단체 등을 암시하는 닉네임 입력시 경고없이 계정이 삭제되니 유의하세요.
          </div>
        </div><br />

        {/* 이메일 */}
        <div className="form-group row">
          <label className="form-label">이메일</label>
          <div className="input-group mb-3">
            <Input type="text" class="form-control" name="mbr_email" required placeholder="abcd1234@email.com" onchange="emailChk()" />
            <div className="col-sm-12">
              <span id="emailCheck"></span>
              {/* <script type="text/javascript">
                      function emailChk() {
                        
                        var isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        var isHan = /[ㄱ-ㅎ가-힣]/g;
                        var email = $("mbr_email").val();
                          
                          if(email != "") {
                            if(!isEmail.test(email) \\ isHan.test(email)) {
                              document.getElementById('emailCheck').innerHTML='이메일을 확인해주세요';
                              document.getElementById('emailCheck').style.color='red';
                            } else {
                                document.getElementById('emailCheck').innerHTML='사용가능한 이메일';
                                document.getElementById('emailCheck').style.color='blue';
                              }
                          }
                          
                      }
                </script> */}
            </div>
          </div>
        </div><br />

        {/* 연락처 */}
        <div className="form-group row">
          <label className="form-label">연락처</label>
          <div className="input-group mb-3">
            <Input type="number" className="form-control" required placeholder="01012345678" />
          </div>
        </div><br />

        {/* 생년월일 */}
        <div className="form-group row">
          <label className="form-label">생년월일</label>
          <div className="input-group mb-3">
            <Input type="date" className="form-control" />
          </div>
        </div><br />

        {/* 성별 */}
        <div className="form-group row">
          <label className="form-label">성별</label>
          <div className="input-group mb-3">
            <div className="col-sm-3">
              <Input type="radio" className="form-check-input" name="mbr_gender" id="mbr_gender" value="M" />&nbsp;남자
            </div>
            <div className="col-sm-3">
              <Input type="radio" className="form-check-input" name="mbr_gender" id="mbr_gender" value="F" />&nbsp;여자
            </div>
            <div className="col-sm-3">
              <Input type="radio" className="form-check-input" name="mbr_gender" id="mbr_gender" value="N" />&nbsp;논바이너리
            </div>
          </div>
        </div><br />

        {/* 이용약관 */}
        <div className="form-group row">
          <label className="form-label">성별</label>
          <div className="input-group mb-3">
            <div className="col-sm-10" align="left">
              <Checkbox value={term} onChange={onChangeTerm}>&nbsp;개인정보 수집 이용동의 (필수)</Checkbox>
            </div>
            <div className="col-sm-2" align="right">
              <button type="button" className="btn btn-primary btn-sm">약관</button>
            </div>
          </div>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div><br />

        {/* 회원가입 버튼 */}
        <div className="form-group row">
          <Button type="primary" className="btn btn-info" htmlType="submit" >회원가입</Button>
          {/* <button type="submit" className="btn btn-info">회원가입</button> */}
        </div>
      </Form>
    </div>
  );
}

export default RegiMbrComponent;