import React from 'react'
import comment from '../assets/comments.png'


const CardAbout = ({ comment, name, paragraph }) => {
    return (
        <div className="h-36 w-50 flex flex-col  bg-white dark:bg-gray-700 p-4 rounded-4xl justify-center items-center">
            <div className='h-10 w-10 rounded-full'>
                <img src={comment} alt="" />
            </div>
            <div className='text-black dark:text-white'>{name}</div>
            <div className="dark:text-gray-300">{paragraph}</div>
        </div>
    )
}

export default CardAbout


