import React from 'react'

const Square = ({ children, isBlackSqaure }) => {
    const bgClass = isBlackSqaure ? 'square-black' : 'square-white'
    return (
        <div className={`${bgClass} board-square`}>
            {children}
        </div>
    )
}

export default Square
