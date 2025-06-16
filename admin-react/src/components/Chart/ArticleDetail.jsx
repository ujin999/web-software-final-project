import React from 'react';

export default function ArticleDetail() {
  const post = {
    id: 1,
    title: "Typescript vs JavaScript",
    nickname: '강수민',
    views: 145,
    category: "프론트엔드",
    date: "2025-06-14",
    content: `최근에 프론트엔드 프로젝트를 진행하면서 TypeScript를 도입해볼까 고민 중입니다.  
  지금까지는 JavaScript만 써왔는데, 주변에서 타입 안정성과 자동완성 등의 장점 때문에 TypeScript를 추천하는 경우가 많더라고요.
  
  하지만 설정도 복잡하고 러닝 커브도 있다고 해서 망설여집니다.  
  작은 프로젝트에도 TypeScript가 과연 필요한 걸까요?
  
  여러분은 어떤 기준으로 TypeScript를 선택하시나요?  
  또, 실무에서 겪어보신 경험이 있다면 TypeScript의 장단점도 함께 알려주시면 감사하겠습니다!`,
  
    comments: [
      {
        writer: "dev_hana",
        date: "2025-06-14",
        content: "작은 프로젝트에서는 JavaScript로 빠르게 시작하고, 점차 규모가 커질 때 TypeScript로 마이그레이션하는 것도 괜찮아요. 처음부터 TS 쓰면 코드 퀄리티는 확실히 올라가요!"
      },
      {
        writer: "jslover",
        date: "2025-06-14",
        content: "저는 리액트 쓸 때부터 무조건 TS로 시작해요. 타입 덕분에 유지보수가 훨씬 쉬워졌습니다. 초반 설정은 조금 귀찮지만 VSCode 자동완성만 봐도 가치 있어요."
      },
      {
        writer: "junior_dev",
        date: "2025-06-15",
        content: "저도 처음엔 어렵게 느껴졌는데 익숙해지면 오히려 코드 작성 속도 빨라졌어요. 다만 협업 시에는 팀원들 모두 TS에 익숙해야 효과가 나요."
      }
    ]
  };

  return (
    <div className="container">
      <div className="card mb-4">
        <div
          style={{ backgroundColor: 'rgb(75, 88, 118)' }}
          className="card-header text-white"
        >
          <h5 style={{ padding: '5px 0px', fontSize: '1.1rem' }} className="mb-0">
            커뮤니티 게시글
          </h5>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label className="form-label fw-bold">제목</label>
            <input type="text" className="form-control" value={post.title} readOnly />
          </div>

          <div className="mb-3 row">
            <div className="col-md-4">
              <label className="form-label fw-bold">작성자</label>
              <input type="text" className="form-control" value={post.nickname} readOnly />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">작성일</label>
              <input type="text" className="form-control" value={post.date} readOnly />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">조회수</label>
              <input type="text" className="form-control" value={post.views} readOnly />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">내용</label>
            <textarea className="form-control" rows="8" value={post.content} readOnly />
          </div>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h6 style={{ padding: '3px 0px', fontSize: '1.0rem' }} className="mb-0">
            댓글
          </h6>
        </div>
        <div className="card-body">
          {post.comments.length > 0 ? (
            post.comments.map((comment, index) => (
              <div className="border-bottom pb-2 mb-3" key={index}>
                <strong>{comment.writer}</strong>{' '}
                <small className="text-muted">{comment.date}</small>
                <p className="mb-1">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="text-muted">댓글이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
