import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8000"; // 배포시 수정

class CellService {


  // 셀 생성하기
  createCell(cell) {
    // 이미지 업로드를 위해서 content-type을 설정한다
    const config = {
      header: {'content-type': 'multipart/form-data'}
    }
    console.log(config);

    return axios.post(USER_API_BASE_URL + "/cell/create", cell, config);
  }

  // 셀 상세페이지

  // 소목표 생성하기

  // 셀 즐겨찾기

  // 셀 달성하기
}
export default new CellService()