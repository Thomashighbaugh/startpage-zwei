import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Searchbar } from '../Search'
import { motion } from 'framer-motion'

const Time = () => {
  const formatDate = (date: Date) => format(date, 'do      MMMM      yyyy')
  const formatDay = (date: Date) => format(date, 'eeee')
  const formatTime = (date: Date) => format(date, ' kk:mm:ss ')

  const [currentDate, updateDate] = useState(formatDate(new Date()))
  const [currentDay, updateDay] = useState(formatDay(new Date()))
  const [currentTime, updateTime] = useState('loading')

  useEffect(() => {
    const interval = setInterval(() => {
      updateDate(formatDate(new Date()))
      updateDay(formatDay(new Date()))
      updateTime(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className=' p-12  bg-gray-900  w-1/3 bg-opacity-80 rounded-2xl border-2 border-gray-300 border-opacity-100 shadow-2xl text-gray-300 text-center text-xl transition wave duration-500 ease-in-out transform hover:scale-110'
    >
      <p className=''>{currentDay}</p>
      <p className='lg:text-4xl md:text-3xl text-2xl'>{currentDate}</p>
      <p className='lg:text-5xl text-4xl font-black p-2'>{currentTime}</p>
    </motion.div>
  )
}

export default Time
