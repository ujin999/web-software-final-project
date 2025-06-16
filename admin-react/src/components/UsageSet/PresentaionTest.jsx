import React from 'react';
import Line_Chart from 'components/Chart/Line_Chart';
import LineChartV2 from 'components/Chart/Line-Chart-v2';

const lineData = [100, 150, 200, 400, 250, 500, 1000];

const lineV2Data = {
  "labels": ["6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15"],
  "data": [392, 325, 145, 390, 345, 235, 931]
};

export default function PresentaionTest() {
  return (
    <div>
      <Line_Chart visitors={lineData}></Line_Chart>
      <LineChartV2 labels={lineV2Data.labels} data={lineV2Data.data}></LineChartV2>
    </div>
  );
}