import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



// ===Common===
import MainCommonComponent from "./common/MainCommonComponent";

// ===Mbr===
// import UserListComponent from "./mbr/UserListComponent";
// import AddUserComponent from "./mbr/AddUserComponent";
// import EditUserComponent from "./mbr/EditUserComponent";
import LoginMbrComponent from "./mbr/LoginMbrComponent";
import WelcomeComponent from "./mbr/WelcomeComponent";
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
          {/* ???????????? */}
          <Route exact path="/" component={MainCommonComponent} />
          <Route exact path="/main" component={MainCommonComponent} />
          
          {/* ===Mbr=== */}
          {/* ????????? */}
          <Route exact path="/login" component={LoginMbrComponent} />
          <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
          {/* ???????????? */}
          <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
          {/* ???????????? */}
          <Route exact path="/regist" component={RegiMbrComponent} />
          {/* ?????????????????? */}
          {/* <Route component={ErrorComponent}/> */}
          
          {/* ===Board=== */}
          {/* ????????????????????? */}
          <Route exact path="/board/community" component={CommunityBoardComponent} />
          <Route exact path="/board/community/create" component={CommunityBoardCreate} />
          {/* <Route exact path="/board/community/update/{board_id}" component={CommunityBoardUpdate} /> */}
          <Route exact path="/board/community/test" component={CommunityBoardDetail} /> {/* path /board/community/{board_id} ????????????! */}
          {/* ??????????????? */}
          <Route exact path="/board/share" component={ShareBoardComponent} />
          <Route exact path="/board/share/create" component={ShareBoardCreate} />
          {/* <Route exact path="/board/share/update/{board_id}" component={ShareBoardUpdate} /> */}
          <Route exact path="/board/share/test" component={ShareBoardDetail} /> {/* path /board/share/{board_id} ????????????! */}
          
          {/* ===News=== */}
          {/* ??????????????? */}
          <Route exact path="/news/event" component={EventNewsComponent} />
          <Route exact path="/news/event/create" component={EventNewsCreate} />
          {/* <Route exact path="/news/event/update/{news_id}" component={EventNewsUpdate} /> */}
          <Route exact path="/news/event/test" component={EventNewsDetail} /> {/* path /news/event/{news_id} ????????????! */}
          {/* ??????????????? */}
          <Route exact path="/news/magazine" component={MagazineNewsComponent} />
          <Route exact path="/news/magazine/create" component={MagazineNewsCreate} />
          {/* <Route exact path="/news/magazine/update/{news_id}" component={MagazineNewsUpdate} /> */}
          <Route exact path="/news/magazine/test" component={MagazineNewsDetail} /> {/* path /news/magazine/{news_id} ????????????! */}         
          {/* ?????????????????? */}
          <Route exact path="/news/notice" component={NoticeNewsComponent} />
          <Route exact path="/news/notice/create" component={NoticeNewsCreate} />
          {/* <Route exact path="/news/notice/update/{news_id}" component={NoticeNewsUpdate} /> */}
          <Route exact path="/news/notice/test" component={NoticeNewsDetail} /> {/* path /news/notice/{news_id} ????????????! */}
        
          {/* ===Cell=== */}
          {/* ????????? */}
          <Route exact path="/cell" component={CellComponent} />{/* ?????? path??? /user_id/cell??? ????????? ??? */}
          {/* ????????? */}
          <Route exact path="/cell/create" component={CellCreate} />
          {/* ???????????? ??? ?????? */}
          <Route exact path="/cell/test" component={CellDetail} /> {/* path /cell/{cell_id} ????????????! */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default ContentComponent;