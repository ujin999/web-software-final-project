import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function QnADetail() {
  const { id } = useParams();
  const [qna, setQna] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5001/api/qna-detail/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('데이터를 불러오지 못했습니다.');
        }
        return res.json();
      })
      .then((data) => setQna({ ...data, comments: data.comments || [] }))
      .catch((error) => {
        console.error('QnA 데이터 불러오기 실패:', error);
      });
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
  
    const commentData = {
      writer: '운영자',
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      content: newComment,
    };
  
    try {
      const response = await fetch(`http://localhost:5001/api/qna/qna-detail/comment/${qna.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
  
      if (!response.ok) {
        throw new Error('댓글 등록 실패');
      }
  
      // 상태 업데이트
      const updatedComments = [...qna.comments, commentData];
      setQna({ ...qna, comments: updatedComments });
      setNewComment('');
    } catch (err) {
      console.error('댓글 등록 중 오류:', err);
      alert('댓글 등록에 실패했습니다.');
    }
  };

  if (!qna) return <div className="container mt-5">로딩 중...</div>;

  return (
    <div className="container">
      <div className="card mb-4">
        <div
          style={{ backgroundColor: "rgb(75, 88, 118)"}}
          className="card-header text-white"
        >
          <h5 style={{padding: '5px 0px', fontSize: '1.1rem'}} className="mb-0">문의사항</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label fw-bold">제목</label>
            <input
              type="text"
              className="form-control"
              value={qna.title}
              readOnly
            />
          </div>

          <div className="mb-3 row">
            <div className="col-md-6">
              <label className="form-label fw-bold">카테고리</label>
              <input
                type="text"
                className="form-control"
                value={qna.category}
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">작성일</label>
              <input
                type="text"
                className="form-control"
                value={qna.date}
                readOnly
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">내용</label>
            <textarea
              className="form-control"
              rows="5"
              value={qna.content}
              readOnly
            ></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <button
              style={{
                backgroundColor: 'rgb(98, 124, 186)',
                width: '55px',
              }}
              type="submit"
              className="btn text-white col-md-3"
            >
              삭제
            </button>
          </div>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h6 style={{padding: '3px 0px', fontSize: '1.0rem'}} className="mb-0">댓글</h6>
        </div>
        <div className="card-body">
          {qna.comments.length > 0 ? (
            qna.comments.map((comment, index) => (
              <div className="border-bottom pb-2 mb-3" key={index}>
                <strong>{comment.writer}</strong>{' '}
                <small className="text-muted">{comment.date}</small>
                <p className="mb-1">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="text-muted">댓글이 없습니다.</p>
          )}

          <form onSubmit={handleCommentSubmit}>
            <div className="mb-3">
              <label className="form-label">댓글 작성</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="댓글을 입력하세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
              <button
                style={{ backgroundColor: 'rgb(98, 124, 186)', width: '87px' }}
                type="submit"
                className="btn text-white col-md-3"
              >
                댓글 등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
