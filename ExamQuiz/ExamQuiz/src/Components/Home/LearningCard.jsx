import React from 'react'

const LearningCard = ({ icon, title, progress, score, progressBg, textColor }) => {
  return (
    <div className='flex gap-3 mt-2 mb-4 rounded-2xl justify-center items-center border p-2 border-slate-200 '>
      <span className={`text-2xl bg-blue-100 h-8 w-8 rounded-xl flex items-center justify-center ${textColor}`}>
        {icon}
      </span>

      <div className='flex-1'>
        <h2 className='font-semibold text-sm'>{title}</h2>

        {/* Progress */}
        <div className='flex justify-between items-center gap-2'>
          <div className='h-2 w-full rounded-full bg-slate-200'>
            <div
              className={`h-2 rounded-full ${progressBg} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

        <div className='flex justify-between'>
            <span className='text-sm font-semibold text-blue-600'>
              {progress}%
            </span>
          </div>
        </div>

        <p className='text-sm text-slate-600'>{score}</p>
      </div>

    </div>
  )
}

export default LearningCard