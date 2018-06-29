const LEARNING_RATE = 0.2

export default class Brain {

  constructor({initialWeights}) {
    this.weights = initialWeights
  }

  guess(point) {
    const sum = point.x * this.weights.x + point.y * this.weights.y
    const team = sum >= 0 ? 1 : -1
    return team
  }

  train(point, team) {
    const guessResult = this.guess(point)
    const error = team - guessResult
    this.weights = {
      x: this.weights.x + point.x * error * LEARNING_RATE,
      y: this.weights.y + point.y * error * LEARNING_RATE
    }
  }

}
