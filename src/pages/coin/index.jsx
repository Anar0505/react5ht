import React, { useState } from 'react'
import './style.css'
function Coin() {
  const [result, setResult] = useState("")
  const [flipping, setFlipping] = useState(false)

  const flipCoin = () => {
    setFlipping(true)
    setTimeout(() => {
      const outcomes = ["Heads", "Tails"]
      const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)]
      setResult(randomResult)
      setFlipping(false)
    }, 1000)
  };

  return (
    <div className="container">
      <h1 className="title">Coin Flip Game</h1>
      <div className="coin">
        {flipping ? <div className="flipping">Flipping...</div> : <div>{result || "Start the game!"}</div>}
      </div>
      <button className="button" onClick={flipCoin} disabled={flipping}>
        Flip Coin
      </button>
    </div>
  )
}
export default Coin