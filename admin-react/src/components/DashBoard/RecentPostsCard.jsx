import React from 'react';
import './RecentPostsCard.css';

const recentPosts = [
  { id: 101, title: '사이트 점검 안내 공지입니다.', author: '운영자', date: '2025-05-28' },
  { id: 102, title: '자주 묻는 질문 모음 업데이트', author: '관리자', date: '2025-05-27' },
  { id: 103, title: '이벤트 참여 방법 안내', author: '마케팅팀', date: '2025-05-26' },
  { id: 104, title: '로그인 오류 해결 방법 안내', author: '개발팀', date: '2025-05-25' },
  { id: 105, title: '커뮤니티 이용규칙 변경 사항 안내', author: '정책팀', date: '2025-05-24' },
];

const RecentPostsCard = () => {
  return (
    <div className="recent-posts-card">
      <h3 className="card-title">최근 게시글</h3>
      <ul className="post-list">
        {recentPosts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-title" title={post.title}>{post.title}</div>
            <div className="post-meta">
              <span className="author">{post.author}</span>
              <span className="date">{post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPostsCard;
