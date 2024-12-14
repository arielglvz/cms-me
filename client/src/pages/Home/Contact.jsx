import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const Contact = () => {
  const user = {
    name: "Ariel Galvez",
    age: null,
    gender: "male",
    email: "arielglvz@gmail.com",
    mobile: "+639772089843",
    country: "Philippines"
  }

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className='text-tertiary'>{'{'}</p>
          {Object.keys(user).map((key) => (
            <p key={key} className='ml-5'>
              <span className='text-tertiary'>{key}</span> : <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className='text-tertiary'>{'}'}</p>
        </div>
        <div className='h-[400px]'>
          <dotlottie-player
            src="https://lottie.host/6a509503-c9a5-4182-af9b-3756dde149f3/LsDE5oys4I.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  )
}

export default Contact
