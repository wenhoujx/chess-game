import React from 'react'
import Piece from './Piece'
import Square from './Square'
import { useDrop } from 'react-dnd'
import { move } from './Game'

const BoardSquare = ({ piece, isBlackSqaure, position }) => {
    const [, dropRef] = useDrop(() => ({
        accept: 'piece',
        drop: ({ id, fromPosition }) => {
            move(fromPosition, position)
        },
    }))
    return (
        <div className='board-square' ref={dropRef}>
            <Square isBlackSqaure={isBlackSqaure}>
                {piece && <Piece piece={piece} position={position} />}
            </Square>
        </div>
    )
}

export default BoardSquare
