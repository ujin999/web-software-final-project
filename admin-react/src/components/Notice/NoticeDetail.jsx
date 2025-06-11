import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './NoticeDetail.css';

export default function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/notices/detail/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => setNotice(data))
      .catch((error) => {
        console.error("공지사항 데이터 불러오기 실패:", error);
      });
  }, [id]);

  if (!notice) return <div className="container mt-5">로딩 중...</div>;

  return (
    <div className="container">
      <div className="card mb-4">
        <div style={{ backgroundColor: "rgb(75, 88, 118)" }} className="card-header text-white">
          <h5 style={{padding: '5px 0px', fontSize: '1.1rem'}} className="mb-0">공지사항</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label fw-bold">제목</label>
            <input type="text" className="form-control" value={notice.title} readOnly />
          </div>

          <div className="mb-3 row">
            <div className="col-md-4">
              <label className="form-label fw-bold">작성자</label>
              <input type="text" className="form-control" value={notice.writer} readOnly />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">작성일</label>
              <input type="text" className="form-control" value={notice.date} readOnly />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">조회수</label>
              <input type="text" className="form-control" value={notice.views} readOnly />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">내용</label>
            <textarea className="form-control" rows="8" value={notice.content} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
