import './App.css'
import React, { useState } from 'react'
import { Game } from './components/game'
import PropTypes from 'prop-types'

App.propTypes = {
  buttons: PropTypes.array,
  arrayButtonsCopy: PropTypes.array,
  symbolIsNext: PropTypes.bool,
  setButtons: PropTypes.func,
  setSymbolIsNext: PropTypes.func,
  handleClick: PropTypes.func,
  winner: PropTypes.func,
  win: PropTypes.func,
  Game: PropTypes.element,
  count: PropTypes.number,
  setCount: PropTypes.func,
}

function App() {
  const [buttons, setButtons] = useState(Array(9).fill(null))
  const [symbolIsNext, setSymbolIsNext] = useState(true)
  const [count, setCount] = useState(0)

  const handleClick = (index) => {
    const arrayButtonsCopy = [...buttons]
    if (win || arrayButtonsCopy[index]) return

    arrayButtonsCopy[index] = symbolIsNext ? 'X' : 'O'
    setButtons(arrayButtonsCopy)
    setSymbolIsNext(!symbolIsNext)
    setCount(count + 1)
  }

  const winner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const win = winner(buttons)

  return (
    <Game
      buttons={buttons}
      setButtons={setButtons}
      handleClick={handleClick}
      setSymbolIsNext={setSymbolIsNext}
      symbolIsNext={symbolIsNext}
      win={win}
      count={count}
      setCount={setCount}
    />
  )
}

export default App
