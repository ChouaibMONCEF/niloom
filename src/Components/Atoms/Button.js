"use client"
import { useState } from "react"
import Image from "next/image"

export default function Button({ icon, text }) {
  const [imageSize, setImageSize] = useState(16)
  return (
    <>
      <button className='bg-gray-100 px-6 py-3 text-gray-500 text-lg rounded-lg font-semibold flex flex-row justify-center items-center focus:bg-sky-100 outline-none shadow-sm'>
        {icon && (
          <div className='mr-3'>
            <Image
              src={icon}
              width={"auto"}
              height={imageSize}
              alt='Board Icon'
            />
          </div>
        )}
        {text}
      </button>
    </>
  )
}
