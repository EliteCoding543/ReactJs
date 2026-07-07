import React from 'react'

const LeaderboardCard = ({serie, name, imgSrc, score, textColor}) => {
  return (
    <div className='p-2'>
      <div className='flex gap-5 p-2 justify-start items-center border-b border-b-blue-200'>
        <h3 className={`font-bold text-xl text-center ${textColor}`}>{serie}</h3>
        <img className='w-10 h-10 bg-blue-100 rounded-full object-cover' src={imgSrc} alt="img" />
        <div className='flex w-full justify-between items-center px-2'>
            <h2 className='font-bold text-slate-600'>{name}</h2>
            <h5 className='font-bold text-slate-600'>{score}</h5>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardCard
