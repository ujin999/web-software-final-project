import Line from "components/Chart/Line_Chart";
import Alert from "components/Card/Alert";
import Article from "components/Chart/Article";
import Community from "components/community_management/Community"
import NoticeList from "components/Card/NoticeList";
import NoticeTable from "components/Notice/NoticTable";
import QnA from "components/QnA/QnA";
import WritePost from "components/WritePost/WritePost";
import UserVisitChart from "components/Chart/UserVisitChart";
import TodoCard from "components/Card/TodoCard";
import RecentPostsCard from "components/dashboard/RecentPostsCard";
import ServerStatusCard from "components/Card/ServerStatusCard";
import ApiResponseCard from "components/Card/ApiResponseCard";

export default function TestNew(){
  return(
      <>
        {/* <Line></Line> <Alert></Alert> <Article></Article>

        <Community></Community> <NoticeList></NoticeList>

        <NoticeTable></NoticeTable>

        <QnA></QnA>

        <WritePost></WritePost> */}

        <UserVisitChart></UserVisitChart>
        
        <TodoCard></TodoCard> <RecentPostsCard></RecentPostsCard>
        <ApiResponseCard></ApiResponseCard>
        <ServerStatusCard></ServerStatusCard>
      
      </>
  )
}