import React from "react"

const Intro = () => {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Ariel Alila Galvez</h1>
      <h1 className='text-7xl sm:text-3xl text-white'>I build things for web</h1>
      <p className="text-white w-2/">
        I am a Web Developer. I worked as a React Developer in the Philippines.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, magnam ullam ducimus 
        voluptatem laudantium voluptas.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
    </div>
  )
}

export default Intro
