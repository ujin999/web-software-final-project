import Line from "components/Chart/Line_Chart";
import Alert from "components/Chart/Alert";
import Article from "components/Chart/Article";
import Community from "components/community_management/Community"
import NoticeList from "components/Notice/NoticeList";
import NoticeTable from "components/Notice/NoticTable";
import QnA from "components/QnA/QnA";
import WritePost from "components/WritePost/WritePost";
import UserVisitChart from "components/Chart/UserVisitChart";
import TodoCard from "components/dashboard/TodoCard";
import RecentPostsCard from "components/dashboard/RecentPostsCard";
import ServerStatusCard from "components/dashboard/ServerStatusCard";
import ApiResponseCard from "components/dashboard/ApiResponseCard";

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