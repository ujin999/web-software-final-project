import React, { useEffect, useRef } from 'react';
import { DataTable } from 'simple-datatables';

import './Basic-Table.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'simple-datatables/dist/style.css';

export default function BasicTable() {
  const tableRef = useRef();

  useEffect(() => {
    if (tableRef.current) {
      const dataTable = new DataTable(tableRef.current);
      return () => {
        dataTable.destroy();
      };
    }
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-table me-1"></i>
        DataTable Example
      </div>
      <div className="card-body">
        <table ref={tableRef} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['김지훈', '시스템 아키텍트', '서울', 41, '2024/03/15', '₩320,800'],
              ['박서연', '회계사', '부산', 36, '2023/11/02', '₩170,750'],
              ['이준호', '초급 기술 문서 작성자', '대전', 29, '2023/07/19', '₩86,000'],
              ['최민재', '시니어 자바스크립트 개발자', '서울', 32, '2022/12/08', '₩433,060'],
              ['정하늘', '회계사', '부산', 34, '2022/08/21', '₩162,700'],
              ['오예린', '통합 전문가', '대구', 31, '2022/01/30', '₩372,000'],
              ['홍석진', '영업 보조', '대전', 28, '2021/09/14', '₩137,500'],
              ['윤지우', '통합 전문가', '부산', 35, '2021/03/03', '₩327,900'],
              ['강수민', '자바스크립트 개발자', '대전', 33, '2020/11/25', '₩205,500'],
              ['한유진', '소프트웨어 엔지니어', '서울', 30, '2020/05/10', '₩103,600'],
              ['한유진', '소프트웨어 엔지니어', '서울', 30, '2020/05/10', '₩103,600'],
              ['한유진', '소프트웨어 엔지니어', '서울', 30, '2020/05/10', '₩103,600'],
              ['한유진', '소프트웨어 엔지니어', '서울', 30, '2020/05/10', '₩103,600'],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}