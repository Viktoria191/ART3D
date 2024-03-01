import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 15, label: 'РОЗОВЫЙ СЕГМЕНТ', color: '#FF69B4' },
  { id: 1, value: 15, label: 'СЕРЫЙ СЕГМЕНТ', color: '#D9D9D9' },
  { id: 2, value: 20, label: 'ЗЕЛЕНЫЙ СЕГМЕНТ', color: '#97BB31' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={300}
      width={700}
    />
  );
}
