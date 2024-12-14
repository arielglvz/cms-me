import React from 'react'

const LeftSider = () => {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static pb-10'>
      <div className='flex flex-col items-center'>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/">
            <i className="ri-facebook-circle-line text-gray-500 text-xl" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <i className="ri-mail-line text-gray-500 text-xl"/>
          </a>
          <a href="https://www.instagram.com/">
            <i className="ri-instagram-line text-gray-500 text-xl"/>
          </a>
          <a href="https://www.linkedin.com/in/arielglvz/">
            <i className="ri-linkedin-box-line text-gray-500 text-xl"/>
          </a>
          <a href="">
            <i className="ri-github-line text-gray-500 text-xl"/>
          </a>
        </div>
        <div className='w-[1px] h-32 bg-[#125f63] mt-5 sm:hidden'></div>
      </div>
    </div>
  )
}

export default LeftSider
