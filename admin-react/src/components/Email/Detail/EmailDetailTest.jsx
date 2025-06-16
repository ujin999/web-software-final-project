import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EmailDetailTest() {
  const { id } = useParams();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const dummyData = {
      subject: "예시 이메일 제목",
      email: "example@domain.com",
      date: "2025-06-15T09:30:00",
      preview: "이것은 이메일 미리보기입니다.",
      content: "이것은 본문 내용입니다. 실제 API 호출 없이도 화면을 구성할 수 있습니다.",
    };

    const timer = setTimeout(() => {
      setEmail(dummyData);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (!email) return <div className="container mt-5">로딩 중...</div>;

  const formattedDate = new Date(email.date).toLocaleString('ko-KR', {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit"
  });

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div style={{ backgroundColor: "rgb(75, 88, 118)" }} className="card-header text-white">
          <h5 className="mb-0">이메일 상세 정보</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label fw-bold">제목</label>
            <input type="text" className="form-control" value={email.subject} readOnly />
          </div>

          <div className="mb-3 row">
            <div className="col-md-6">
              <label className="form-label fw-bold">발신자</label>
              <input type="text" className="form-control" value={email.email} readOnly />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">날짜</label>
              <input type="text" className="form-control" value={formattedDate} readOnly />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">미리보기</label>
            <textarea className="form-control" rows="3" value={email.preview} readOnly />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">상세 내용</label>
            <textarea
              className="form-control"
              rows="6"
              value={email.content || "상세 내용이 없습니다."}
              readOnly
            />
          </div>

          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
