import React from 'react'

const Card1 = ({ image, heading, description, index }) => {
    const colors = [
        {
            bg: "bg-teal-50",
            border: "border-teal-500",
            gradient: "from-teal-500 to-emerald-500",
        },
        {
            bg: "bg-emerald-50",
            border: "border-emerald-500",
            gradient: "from-emerald-500 to-teal-500",
        },
        {
            bg: "bg-teal-100",
            border: "border-teal-600",
            gradient: "from-emerald-600 to-teal-600",
        },
    ];

    // Ultra-safe color selection
    const safeIndex = typeof index === 'number' ? index : 0;
    const color = colors[safeIndex % colors.length] || colors[0];

    return (
        <div className={`w-full h-full p-5 rounded-2xl flex flex-col items-center justify-center text-center ${color.bg} dark:bg-gray-700 transition-colors duration-300`}>
            <div className='flex flex-col items-center gap-2 mb-2'>
                {image && <img className='w-12 h-12 object-contain mb-2' src={image} alt="" />}
                <div className='font-bold text-xl text-black dark:text-white'> {heading}</div>
            </div>
            <p className='text-xl text-gray-700 dark:text-gray-200 font-bold leading-relaxed'>{description}</p>
        </div>
    )
}

export default Card1;


