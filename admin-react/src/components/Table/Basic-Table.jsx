import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from 'simple-datatables';

import './Basic-Table.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'simple-datatables/dist/style.css';

export default function BasicTable({options, allData}) {
  const tableRef = useRef();
  const [selectedOption, setSelectedOption] = useState(options[0]?.value || '');
  const [columns, setColumns] = useState(allData[selectedOption]?.columns || []);
  const [data, setData] = useState(allData[selectedOption]?.data || []);

  useEffect(() => {
    if (tableRef.current) {
      const dataTable = new DataTable(tableRef.current, {
        perPage: 15,
      });
      
      return () => {
        dataTable.destroy();
      };
    }
  }, [selectedOption]);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setColumns(allData[value]?.columns || []);
    setData(allData[value]?.data || []);
  };

  if (allData==null) return <p>데이터가 없습니다.</p>;

  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div>
          <i className="fas fa-table me-2"></i>
          <span>데이터 테이블</span>
        </div>
        <select
          className="custom-select-dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="card-body" key={selectedOption}>
        <table ref={tableRef} className="table">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}