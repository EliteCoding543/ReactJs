import React from 'react'
import HomeBg from '../../assets/HomeBg.webp'

const Hero = () => {
  return (
    <>
      <div className='bg-linear-to-r from-[#312EBA] via-[#4338CA] to-[#4F46E5] rounded-3xl min-h-115 flex items-center justify-between px-14 py-10'>
        <div className='flex flex-col gap-5 px-10'>
            <h1 className='text-5xl font-semibold text-white leading-15'>Prepare Smart, Score <span className='text-amber-400'>Better</span></h1>
            <p className='text-white leading-7 font-medium'>Practice unlimited quizzes, take mock tests, and crack your dream government exam.</p>

            <div className='flex gap-4'>
                <button className='px-10 py-4 rounded-2xl bg-white text-blue-700  font-semibold shadow-xl hover:scale-105 transition duration-300'>
                    Start Quiz
                </button>
                <button className='px-10 py-4 rounded-2xl border border-white/40 text-white hover:bg-white/10 transition duration-300'>
                Mock Test
                </button>
            </div>
        </div>

        <div>
            <img className='pr-9' src={HomeBg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
