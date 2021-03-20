import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'

const Piece = ({ piece: { type, color }, position }) => {
    const [{ isDragging }, dragRef, preview] = useDrag(() => ({
        type: 'piece',
        item: {
            id: `${type}_${color}`,
            fromPosition: position,
        },
        collect: (monitor) => {
            return {
                isDragging: !!monitor.isDragging()
            }
        }
    }))
    const image = require(`../assets/${type}_${color}.png`).default
    return (
        <>
            <DragPreviewImage connect={preview} src={image} />
            <div className='piece-container' ref={dragRef} style={{ opacity: isDragging ? 0 : 1 }}>
                <img className='piece' alt="" src={image} />
            </div>
        </>

    )
}

export default Piece
