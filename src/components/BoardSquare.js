import React, { useEffect, useState } from 'react'
import Piece from './Piece'
import Square from './Square'
import { useDrop } from 'react-dnd'
import { handleMove, gameSubject } from './Game'
import Promote from './Promote'

const BoardSquare = ({ piece, isBlackSqaure, position }) => {
    const [promotion, setPromotion] = useState(null)
    const [, dropRef] = useDrop(() => ({
        accept: 'piece',
        drop: ({ id, fromPosition }) => {
            handleMove(fromPosition, position)
        },
    }))
    useEffect(() => {
        const subscribe = gameSubject.subscribe(({ pendingPromotion }) => {
            return pendingPromotion && pendingPromotion.to === position ?
                setPromotion(pendingPromotion) : setPromotion(null)
        }
        )
        return () => subscribe.unsubscribe()
    }, [])
    return (
        <div className='board-square' ref={dropRef}>
            <Square isBlackSqaure={isBlackSqaure}>
                {
                    promotion ? <Promote promotion={promotion} />
                        : (piece && <Piece piece={piece} position={position} />)

                }
            </Square>
        </div>
    )
}

export default BoardSquare
