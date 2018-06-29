import React from 'react'
import Brain from './Brain'
import Chart from './Chart'

const CHART_MAX_X = 500
const CHART_MAX_Y = 500

const rand = (high, low) => Math.random() * (high - low) + low

const getTeam = point => point.x > point.y ? 1 : -1

// setup the brain
const brain = new Brain({
  initialWeights: {
    x: rand(-1, 1),
    y: rand(-1, 1)
  }
})

// train the brain with 1000 points
Array.from(Array(1000)).forEach(_ => {
  const trainingPoint = {
    x: rand(0, CHART_MAX_X),
    y: rand(0, CHART_MAX_Y)
  }
  const correctTeam = getTeam(trainingPoint)
  brain.train(trainingPoint, correctTeam)
})

// generate 1000 random points to show
const points = []
for (let i = 0; i < 1000; i++) {
  points.push({
    x: rand(0, CHART_MAX_X),
    y: rand(0, CHART_MAX_Y)
  })
}

// let the brain guess the color of each point
const pointsToDraw = points.map(point => ({
  x: point.x,
  y: point.y,
  team: brain.guess(point)
}))

const App = () =>
  <Chart
    width={CHART_MAX_X}
    height={CHART_MAX_Y}
    points={pointsToDraw}
  />

export default App
