import React from 'react'

const getFillColor = (point) => (point.team === -1) ? 'red' : 'blue'

const Chart = ({ width, height, points }) =>
  <svg width={width} height={height} style={{backgroundColor: '#CCC'}}>

    ${points.map((point, index) =>
      <circle
        key={index}
        cx={point.x}
        cy={point.y}
        r="3"
        fill={getFillColor(point)}
      />
    )}

    <line
      x1="0"
      y1="0"
      x2={width}
      y2={height}
      stroke="black"
      strokeWidth="2"
    />

  </svg>

export default Chart
