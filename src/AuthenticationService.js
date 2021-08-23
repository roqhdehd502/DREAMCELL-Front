import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8000"; // 배포시 수정

class AuthenticationService {
    // body에 username과 password를 넣고 POST /authenticate
    executeJwtAuthenticationService(username, password) {
        return axios.post(USER_API_BASE_URL + '/authenticate', {
            username,
            password
        })
    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.get(USER_API_BASE_URL + '/hello');        
    }

    // 로그인에 성공하면 username을 authenticatedUser로 localStorage에 저장
    // JWTToken을 생성해 setupAxiosInterceptors에 넣기
    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }

    // 앞에 Bearer를 추가해서 Token을 생성
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    // Axios는 자바스크립트에서 HTTP 통신을 위해 쓰이는 Promise 기반 HTTP Client이다.
    // Axios Interceptors는 모든 Request/Response가 목적지에 도달하기 전에 Request에 원하는 내용을 담아 보내거나 원하는 코드를 실행시킬 수 있다.
    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    // 로그아웃
    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    // 로그인 여부 확인
    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    // 로그인한 ID 가져오기
    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }

    // 가입시 ID 중복체크
    idCheck(){
      return axios.put(USER_API_BASE_URL + '/regist/idCheck')
    }
}

export default new AuthenticationService()