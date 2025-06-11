import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    id: '',
    name: '',
    date: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`http://localhost:5001/api/users/${id}`);
        if (!res.ok) throw new Error('유저 정보를 불러오는데 실패했습니다.');
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/api/users/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error('수정에 실패했습니다.');
      alert('수정 완료!');
      navigate('/user/management');
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="container mt-5">로딩 중...</div>;
  if (error) return <div className="container mt-5 text-danger">에러: {error}</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-white" style={{ backgroundColor: 'rgb(75, 88, 118)' }}>
          <h5 className="mb-0">회원 정보 수정</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">ID</label>
              <input type="text" className="form-control" name="id" value={userData.user_id} readOnly />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">이름</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">가입날짜</label>
              <input
                type="text"
                className="form-control"
                name="date"
                value={userData.signup_date}
                onChange={handleChange}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">이메일</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'right' }}>
              <button
                type="submit"
                className="btn text-white col-lg-3"
                style={{ width: '87px', backgroundColor: 'rgb(98, 124, 186)' }}
              >
                수정 완료
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserEditForm;
