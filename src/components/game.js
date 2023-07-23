import React from 'react'
import './game.css'

export const Game = ({
  buttons,
  setButtons,
  handleClick,
  symbolIsNext,
  setSymbolIsNext,
  win,
  count,
  setCount,
}) => {
  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => {
          setSymbolIsNext(true)
          setCount(0)
          setButtons(Array(9).fill(null))
        }}
      >
        Начать заново
      </button>
    )
  }

  const whoseMove = () => {
    return win ? (
      <div className="winner">Победил: {symbolIsNext ? 'O' : 'X'}</div>
    ) : count === 9 ? (
      <div className="winner">Ничья</div>
    ) : (
      <div className="whoseMove">Текущий ход: {symbolIsNext ? 'X' : 'O'}</div>
    )
  }

  return (
    <div className="wrapper">
      {startNewGame()}
      <div className="container">
        {buttons.map((square, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {square}
          </button>
        ))}
      </div>
      {whoseMove()}
      <div className="info">Информация</div>
    </div>
  )
}
