import Line from "components/Chart/Line_Chart";
import Alert from "components/Chart/Alert";
import Article from "components/Chart/Article";
import Community from "components/community_management/Community"
import NoticeList from "components/Notice/NoticeList";
import NoticeTable from "components/Notice/NoticTable";
import QnA from "components/QnA/QnA";

export default function TestNew(){
  return(
      <>
        <Line></Line> <Alert></Alert> <Article></Article>

        <Community></Community> <NoticeList></NoticeList>

        <NoticeTable></NoticeTable>

        <QnA></QnA>
      </>
  )
}

