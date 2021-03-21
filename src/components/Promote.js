import React from 'react'
import Square from './Square'
import { move } from './Game'

const promotionPieces = ['r', 'n', 'b', 'q']

const Promote = ({ promotion: { from, to, color } }) => {
    return (
        <div className="board">
            {promotionPieces.map((piece, i) => {
                return (<div key={i} className="promote-square" >
                    <Square isBlackSqaure={i % 3 === 0}>
                        <div className='piece-container' onClick={() => move(from, to, piece)}>
                            <img
                                className='piece cursor-pointer'
                                alt=""
                                src={require(`../assets/${piece}_${color}.png`).default} />
                        </div>
                    </Square>
                </div>)
            })}
        </div>
    )
}

export default Promote