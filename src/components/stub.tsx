'use client'

import React from 'react'
import Countdown from 'react-countdown'
import Toast from '@/components/toast'

const Stub = () => {
  const [isToastHidden, setIsToastHidden] = React.useState(true)
  const handleClick = () => {
    setIsToastHidden(!isToastHidden)
  }

  // @ts-ignore
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>hello</div>
    } else {
      const formattedHours = hours.toString().padStart(2, '0')
      const formattedMinutes = minutes.toString().padStart(2, '0')
      const formattedSeconds = seconds.toString().padStart(2, '0')
      return (
        <span className='font-medium text-base' suppressHydrationWarning>
          {formattedHours}:{formattedMinutes}:{formattedSeconds}
        </span>
      )
    }
  }

  return (
    <div>
      <div className='flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='flex flex-col items-center justify-center w-[300px] bg-white rounded-md px-2 py-4 shadow-sm'>
          <img alt='Happy Birthday' className='h-[180px] w-auto py-2 mb-5' src={'./card2x.png'} />
          <h2 className='font-medium text-xl text-[#212529] mb-2'>До праздника осталось:</h2>
          <div className='flex items-center w-[100px] gap-2 text-cyan-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-alarm-clock'
            >
              <circle cx='12' cy='13' r='8' />
              <path d='M12 9v4l2 2' />
              <path d='M5 3 2 6' />
              <path d='m22 6-3-3' />
              <path d='M6.38 18.7 4 21' />
              <path d='M17.64 18.67 20 21' />
            </svg>
            <Countdown
              date={new Date('2024-08-05T00:00:00.000').toISOString()}
              renderer={renderer}
            />
          </div>
          <button
            onClick={handleClick}
            className='mt-5 shadow-sm transition-all ease-in-out bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l  text-white rounded-xl px-4 py-2'
          >
            Получить подарок
          </button>
        </div>
      </div>
      <Toast
        isHidden={isToastHidden}
        title={'Storm 🌊'}
        message={'Еще слишком рано для подарков :)'}
        imgUrl={'./storm.png'}
        onClose={handleClick}
      />
    </div>
  )
}

export default Stub