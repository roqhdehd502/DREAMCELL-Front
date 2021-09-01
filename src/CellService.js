import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8000"; // 배포시 수정

class CellService {
  // 셀 생성하기
  createCell(cell) {
    return axios.post(USER_API_BASE_URL + "/cell/create", cell, { headers: { "Content-Type": `multipart/form-data; `, }});
  }

  // 소목표 생성하기

  // 셀 즐겨찾기

  // 셀 달성하기
}
export default new CellService()