import React, { useState } from 'react';
import './WritePost.css';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('계정');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, category, content, file });
    alert('글이 등록되었습니다.');
  };

  return (
    <div className="write-box">
      <h2 className="write-title">게시글 작성</h2>
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>제목</label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>작성자</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option>관리자</option>
              <option>개발팀</option>
              <option>운영팀</option>
              <option>기획팀</option>
              <option>법무팀</option>
              <option>고객지원</option>
              <option>마케팅팀</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>내용</label>
          <textarea
            rows="8"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>파일 업로드</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file && <span className="file-name">{file.name}</span>}
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">작성완료</button>
          <button type="button" className="cancel-btn" onClick={() => window.history.back()}>취소</button>
        </div>
      </form>
    </div>
  );
};

export default WritePost;