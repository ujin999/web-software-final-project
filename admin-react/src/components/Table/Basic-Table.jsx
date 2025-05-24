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
              ['Tiger Nixon', 'System Architect', 'Edinburgh', 61, '2011/04/25', '$320,800'],
              ['Garrett Winters', 'Accountant', 'Tokyo', 63, '2011/07/25', '$170,750'],
              ['Ashton Cox', 'Junior Technical Author', 'San Francisco', 66, '2009/01/12', '$86,000'],
              ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', 22, '2012/03/29', '$433,060'],
              ['Airi Satou', 'Accountant', 'Tokyo', 33, '2008/11/28', '$162,700'],
              ['Brielle Williamson', 'Integration Specialist', 'New York', 61, '2012/12/02', '$372,000'],
              ['Herrod Chandler', 'Sales Assistant', 'San Francisco', 59, '2012/08/06', '$137,500'],
              ['Rhona Davidson', 'Integration Specialist', 'Tokyo', 55, '2010/10/14', '$327,900'],
              ['Colleen Hurst', 'Javascript Developer', 'San Francisco', 39, '2009/09/15', '$205,500'],
              ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
              ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
              ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
              ['Sonya Frost', 'Software Engineer', 'Edinburgh', 23, '2008/12/13', '$103,600'],
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