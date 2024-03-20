"use client"
import { useState } from "react"
import Image from "next/image"

export default function Button({ image, text }) {
  const [imageSize, setImageSize] = useState(16)
  return (
    <>
      <button className='bg-gray-200 px-6 py-3 rounded-lg font-semibold flex flex-row justify-center items-center focus:bg-sky-100 outline-none shadow-sm'>
        {image && (
          <div className='mr-3'>
            <Image
              src={image}
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
