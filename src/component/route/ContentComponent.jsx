import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



// ===Common===
import MainCommonComponent from "./common/MainCommonComponent";

// ===Mbr===
// import UserListComponent from "./mbr/UserListComponent";
// import AddUserComponent from "./mbr/AddUserComponent";
// import EditUserComponent from "./mbr/EditUserComponent";
import LoginMbrComponent from "./mbr/LoginMbrComponent";
import LogoutComponent from "./mbr/LogoutComponent";
import AuthenticatedRoute from './mbr/AuthenticatedRoute'
import ErrorComponent from './mbr/ErrorComponent'
import RegiMbrComponent from "./mbr/RegiMbrComponent";

// ===Board===
import CommunityBoardComponent from "./board/CommunityBoardComponent";
import CommunityBoardCreate from "./board/CommunityBoardCreate";
import CommunityBoardUpdate from "./board/CommunityBoardUpdate";
import CommunityBoardDetail from "./board/CommunityBoardDetail";
import ShareBoardComponent from "./board/ShareBoardComponent";
import ShareBoardCreate from "./board/ShareBoardCreate";
import ShareBoardUpdate from "./board/ShareBoardUpdate";
import ShareBoardDetail from "./board/ShareBoardDetail";

// ===News===
import EventNewsComponent from "./news/EventNewsComponent";
import EventNewsCreate from "./news/EventNewsCreate";
import EventNewsUpdate from "./news/EventNewsUpdate";
import EventNewsDetail from "./news/EventNewsDetail"; 
import MagazineNewsComponent from "./news/MagazineNewsComponent";
import MagazineNewsCreate from "./news/MagazineNewsCreate";
import MagazineNewsUpdate from "./news/MagazineNewsUpdate";
import MagazineNewsDetail from "./news/MagazineNewsDetail";
import NoticeNewsComponent from "./news/NoticeNewsComponent";
import NoticeNewsCreate from "./news/NoticeNewsCreate";
import NoticeNewsUpdate from "./news/NoticeNewsUpdate";
import NoticeNewsDetail from "./news/NoticeNewsDetail";

// ===Cell===
import CellComponent from "./cell/CellComponent";
import CellCreate from "./cell/CellCreate";
import CellDetail from "./cell/CellDetail";


const ContentComponent = () => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          {/* ===Common=== */}
          {/* 메인화면 */}
          <Route exact path="/" component={MainCommonComponent} />
          <Route exact path="/main" component={MainCommonComponent} />
          
          {/* ===Mbr=== */}
          {/* 로그인 */}
          <Route exact path="/login" component={LoginMbrComponent} />
          {/* 로그아웃 */}
          <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
          {/* 회원가입 */}
          <Route exact path="/regist" component={RegiMbrComponent} />
          {/* 회원인증오류 */}
          {/* <Route component={ErrorComponent}/> */}
          
          {/* ===Board=== */}
          {/* 커뮤니티게시판 */}
          <Route exact path="/board/community" component={CommunityBoardComponent} />
          <Route exact path="/board/community/create" component={CommunityBoardCreate} />
          {/* <Route exact path="/board/community/update/{board_id}" component={CommunityBoardUpdate} /> */}
          <Route exact path="/board/community/test" component={CommunityBoardDetail} /> {/* path /board/community/{board_id} 수정할것! */}
          {/* 공유게시판 */}
          <Route exact path="/board/share" component={ShareBoardComponent} />
          <Route exact path="/board/share/create" component={ShareBoardCreate} />
          {/* <Route exact path="/board/share/update/{board_id}" component={ShareBoardUpdate} /> */}
          <Route exact path="/board/share/test" component={ShareBoardDetail} /> {/* path /board/share/{board_id} 수정할것! */}
          
          {/* ===News=== */}
          {/* 이벤트소식 */}
          <Route exact path="/news/event" component={EventNewsComponent} />
          <Route exact path="/news/event/create" component={EventNewsCreate} />
          {/* <Route exact path="/news/event/update/{news_id}" component={EventNewsUpdate} /> */}
          <Route exact path="/news/event/test" component={EventNewsDetail} /> {/* path /news/event/{news_id} 수정할것! */}
          {/* 매거진소식 */}
          <Route exact path="/news/magazine" component={MagazineNewsComponent} />
          <Route exact path="/news/magazine/create" component={MagazineNewsCreate} />
          {/* <Route exact path="/news/magazine/update/{news_id}" component={MagazineNewsUpdate} /> */}
          <Route exact path="/news/magazine/test" component={MagazineNewsDetail} /> {/* path /news/magazine/{news_id} 수정할것! */}         
          {/* 공지사항소식 */}
          <Route exact path="/news/notice" component={NoticeNewsComponent} />
          <Route exact path="/news/notice/create" component={NoticeNewsCreate} />
          {/* <Route exact path="/news/notice/update/{news_id}" component={NoticeNewsUpdate} /> */}
          <Route exact path="/news/notice/test" component={NoticeNewsDetail} /> {/* path /news/notice/{news_id} 수정할것! */}
        
          {/* ===Cell=== */}
          {/* 셀목록 */}
          <Route exact path="/cell" component={CellComponent} />{/* 이후 path를 /user_id/cell로 수정할 것 */}
          {/* 셀작성 */}
          <Route exact path="/cell/create" component={CellCreate} />
          {/* 셀디테일 및 수정 */}
          <Route exact path="/cell/test" component={CellDetail} /> {/* path /cell/{cell_id} 수정할것! */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default ContentComponent;