import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
      <div className=" flex gap-5 text-6xl sm:text-3xl">
        <h1 className='fl text-secondary'>A</h1>
        <h1 className='sl text-white'>A</h1>
        <h1 className='tl text-tertiary'>G</h1>
      </div>
    </div>
  )
}

export default Loader
